
import { EventIcon, CalendarPlusIcon } from "../icons";

interface Props {
    day: Date,
    onShowEvents: () => void
    onShowAddEvent: () => void
}


function CalendarTab({ day, onShowEvents, onShowAddEvent }: Props) {

  const currentDate = new Date();
  
  return (
    <div className={`py-1 px-2 font-bold h-20 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex flex-col justify-between overflow-hidden calendar-tab`}>

      <div className={`${currentDate.toDateString() == day.toDateString() ? "bg-main-color rounded-[50%] text-white w-7 h-7 flex justify-center items-center text-sm": ""}`}>
        {day.getDate()}
      </div>

      <div className="transition-transform self-end flex gap-2 translate-y-[120%] event-button">

        <button className="rounded-[50%] w-7 h-7 bg-green-400 cursor-pointer flex justify-center items-center" onClick={onShowAddEvent}>
            <CalendarPlusIcon width={18} height={18} color="#fff" />
        </button>

        <button className="rounded-[50%] w-7 h-7 bg-main-color cursor-pointer flex justify-center items-center" onClick={onShowEvents}>
            <EventIcon width={18} height={18} color="#fff" />
        </button>

      </div>

      

      
    </div>
  )
}

export default CalendarTab