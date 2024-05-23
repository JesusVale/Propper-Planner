import ModalWrapper from "./ModalWrapper";
import { addRoutineEvent, getRoutineActivityById, updateRoutineActivity } from "../../services/routines";
import { FormEvent, useEffect, useState } from "react";
import useEditMode from "../../hooks/useEditMode";
import { AssignmentRoutine } from "../../types";
import RoutineForm from "../routines/RoutineForm";
import RoutineFormSkeleton from "../routines/RoutineFormSkeleton";

interface Props {
    onClose: () => void,
    show: boolean,
    onAdd: () => void
}

function AddRoutineActivity({onClose, show, onAdd}: Props) {

  const [routineActivity, setRoutineActivity] = useState<AssignmentRoutine>({
    name: "",
    start: "00:00",
    end: "00:00",
    days: []
  });

  const [loading, setLoading] = useState(false);

  const {
    editMode,
    selectedItemId,
    setEditMode
  } = useEditMode();

  function setDefault(){
    const form: HTMLFormElement | null = document.querySelector(".routine-form");
    onClose();
    setEditMode(false);
    setRoutineActivity({
        name: "",
        start: "00:00",
        end: "00:00",
        days: []
    })
    form?.reset();
  }

  async function handleOnSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const {start, end, name} = Object.fromEntries(formData.entries());
        const days = [ ...document.querySelectorAll("input[name=days]:checked") ].map(input => (input as HTMLInputElement).value);

        const routine = {
            name: name as string,
            start: start + ":00" as string,
            end: end + ":00" as string,
            days
        }

        if(editMode){
            await updateRoutineActivity(selectedItemId as number, routine);
        } else{
            await addRoutineEvent(routine);
        }
        
        await onAdd();
        setDefault();
  }

  useEffect(()=>{

    async function setRoutineEdit() {
        setLoading(true);
        const routineFetch = await getRoutineActivityById(selectedItemId as number);
        setRoutineActivity(routineFetch);
        setLoading(false);
    }

    if(editMode){
        setRoutineEdit()
    }

  },[selectedItemId, editMode])


  return (
    <ModalWrapper
    title="Create Activity"
    onClose={setDefault}
    show={show}
    >
        <>
            {
                loading ?
                <RoutineFormSkeleton />
                :
                <RoutineForm handleOnSubmit={handleOnSubmit} routineActivity={routineActivity} />
            }
        </>

    </ModalWrapper>
  )
}

export default AddRoutineActivity