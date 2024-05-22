import { useState } from "react";
import { AssignmentRoutine } from "../../types";
import { DeleteIcon, TimeIcon, EditIcon } from "../icons";
import ConfirmModal from "../modals/ConfirmModal";
import { deleteRoutineActivity } from "../../services/routines";
import useEditMode from "../../hooks/useEditMode";

interface Props {
    routines: AssignmentRoutine[],
    onChange: () => void
    onShow: () => void
}

function RoutineList({routines, onChange, onShow}: Props) {

  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<AssignmentRoutine | null>(null);
  const {
    setEditMode,
    setSelectedItemId
  } = useEditMode();


  async function onConfirmDelete(){

    await deleteRoutineActivity(selectedActivity?.id);
    onChange();
    setShowConfirmModal(false);

  }
  
  function handleOnClickDelete(assigment: AssignmentRoutine){

    return () =>{
        setShowConfirmModal(true);
        setSelectedActivity(assigment);
    }
    
  }

  function onEdit(id: number){
    return () =>{
      setEditMode(true);
      setSelectedItemId(id);
      onShow();
    }
  }

  return (
    <>  
        {
            routines.map(activity =>(
              <article key={`${activity.id}ActivityRoutine`} className="border border-gray-400 rounded-lg">
                <div className="border-b border-gray-400 font-bold py-2 px-3 text-xl flex justify-between">
                  <span>
                    {activity.name}
                  </span>
                  
                  <div className="flex gap-2">

                    <button onClick={handleOnClickDelete(activity)} className="text-gray-400 hover:text-main-color transition-colors">
                      <DeleteIcon width={20} height={20} />
                    </button>
                    <button onClick={onEdit(activity.id)} className="text-gray-400 hover:text-main-color transition-colors">
                      <EditIcon width={20} height={20} />
                    </button>

                  </div>

                </div>

                <div className="flex gap-2 py-2 px-3 items-center">
                  <div className="text-main-color">
                    <TimeIcon width={20} height={20} />
                  </div>
                  <div className="font-semibold">
                    {activity.start} - {activity.end}
                  </div>
                </div>

              </article>
            ))
          }

          <ConfirmModal 
          text={`Are you sure you wanna delete the activity: ${selectedActivity?.name}`} 
          show={showConfirmModal} 
          onConfirm={onConfirmDelete}
          onCancel={() => setShowConfirmModal(false)}  
          />
    </>
  )
}

export default RoutineList