import { WEEK_DAYS } from "../../constants";

function CalendarHeader() {
  return (
    <>
    
        {
            WEEK_DAYS.map(day =>(
                <div key={`day${day}Header`} className="p-2 shadow-[inset_-12px_-8px_40px_#46464620]">{day}</div>
            ))
        }
    
    </>
  )
}

export default CalendarHeader