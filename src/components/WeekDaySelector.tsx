import { Dispatch } from "react";
import { WEEK_DAYS } from '../constants';
import { WeekDay } from "../types";

interface Props {
    selectedDay: WeekDay,
    setSelectedDay: Dispatch<WeekDay>
}

function WeekDaySelector({selectedDay, setSelectedDay}: Props) {

  return (
    <>
        <div className="flex gap-3">

            {
                WEEK_DAYS.map(weekDay =>(
                  
                    <label key={`${weekDay}RoutineSelected`} htmlFor={weekDay} className={`relative w-10 h-10 rounded-[50%] font-bold flex justify-center items-center cursor-pointer transition-colors hover:bg-main-color hover:text-white duration-150 ${selectedDay === weekDay? "bg-main-color text-white": "bg-gray-300"}`}>
                        <input type="radio" id={weekDay} className="absolute opacity-0" name="weekdaySelected" value={weekDay} onClick={() => setSelectedDay(weekDay)} />
                        {weekDay.substring(0, 3)}
                    </label>
                    
                ))
            }
            
        </div>
    
    </>
  )
}

export default WeekDaySelector