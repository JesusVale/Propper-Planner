import { FormEvent } from "react"
import { AssignmentRoutine } from "../../types"
import { WEEK_DAYS } from "../../constants"

interface Props {
    routineActivity: AssignmentRoutine,
    handleOnSubmit: (event: FormEvent<HTMLFormElement>) => void
}

function RoutineForm({routineActivity, handleOnSubmit}: Props) {

  return (
    <form className="routine-form flex flex-col gap-3" onSubmit={handleOnSubmit}>
            
        <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">Name</label>
            <input type="text" name="name" defaultValue={routineActivity.name} className="border border-gray-400 rounded-md px-2 py-1 text-sm" />
        </div>
        <div className="flex gap-2 flex-col">

            <span className="font-semibold">Days: </span>
            <div className="flex gap-1">
                {
                    WEEK_DAYS.map(weekDay =>(

                        <label className="relative cursor-pointer" htmlFor={`${weekDay}FormRoutine`} key={`${weekDay}FormRoutine`}>

                            <input type="checkbox" name="days" 
                            value={weekDay}
                            defaultChecked={routineActivity.days.includes(weekDay)} 
                            className="absolute opacity-0 routine-checkbox" 
                            id={`${weekDay}FormRoutine`} />

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
            <input type="time" defaultValue={routineActivity.start.substring(0, 5)} name="start" />
        </div>

        <div className="flex gap-2 flex-col">
            <label htmlFor="end" className="font-semibold">End</label>
            <input type="time" defaultValue={routineActivity.end.substring(0, 5)} name="end" />
        </div>

        <div>
            <button className="bg-main-color text-white rounded-lg py-1 px-5 text-md w-fit mt-2 transition-colors duration-300 hover:cursor-pointer hover:bg-hover-color">Create</button>
        </div>

    </form>
  )
}

export default RoutineForm