import ModalWrapper from "./ModalWrapper";
import { WEEK_DAYS } from "../../constants";
import { addRoutineEvent } from "../../services/routines";
import { FormEvent } from "react";

interface Props {
    onClose: () => void,
    show: boolean,
    onAdd: () => void
}

function AddRoutineActivity({onClose, show, onAdd}: Props) {

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

        await addRoutineEvent(routine);
        await onAdd();
        onClose();

    }


  return (
    <ModalWrapper
    title="Agregar Actividad"
    onClose={onClose}
    show={show}
    >

        <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>

            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">Name</label>
                <input type="text" name="name" className="border border-gray-400 rounded-md px-2 py-1 text-sm" />
            </div>
            <div className="flex gap-2 flex-col">

                <span className="font-semibold">Days: </span>
                <div className="flex gap-1">
                    {
                        WEEK_DAYS.map(weekDay =>(

                            <label className="relative cursor-pointer" htmlFor={`${weekDay}FormRoutine`} key={`${weekDay}FormRoutine`}>

                                <input type="checkbox" name="days" value={weekDay} className="absolute opacity-0 routine-checkbox" id={`${weekDay}FormRoutine`} />
                                <div className="transition-colors hover:bg-main-color font-semibold hover:text-white checkdiv text-xs w-8 h-8 rounded-[50%] bg-gray-300 flex justify-center items-center">
                                    {weekDay.substring(0, 3)}
                                </div>
                            </label>

                        ))
                    }
                </div>
            </div>

            <div className="flex gap-2 flex-col">

                <label htmlFor="start" className="font-semibold">Start</label>
                <input type="time" name="start" />
                
            </div>

            <div className="flex gap-2 flex-col">

                <label htmlFor="end" className="font-semibold">End</label>
                <input type="time" name="end" />
                
            </div>

            <div>

                <button className="bg-main-color text-white rounded-lg py-1 px-5 text-md w-fit mt-2 transition-colors duration-300 hover:cursor-pointer hover:bg-hover-color">Agregar</button>

            </div>

        </form>

    </ModalWrapper>
  )
}

export default AddRoutineActivity