import { useState } from "react";
import CalendarHeader from "./CalendarHeader";
import CalendarTab from "./CalendarTab";
import EventModal from "../modals/EventModal";
import AddEventModal from "../modals/AddEventModal";

interface Props {
    daysMonth: Date[]
}


function CalendarMonth({ daysMonth }: Props) {

    const [showInfo, setShowInfo] = useState<boolean>(false);
    const [showAddEvent, setShowAddEvent] = useState<boolean>(false);
    const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  return (
    <>
        <div className="grid-responsive mt-7">
            <CalendarHeader />
            {
                daysMonth[0].getDay() > 0 && <div className={`space col-start-1 bg-gray-300 col-end-${daysMonth[0].getDay()+1}`}></div>
            } 
            {
                daysMonth.map(date => (
                    <CalendarTab key={`TAB${date.getDate()}`} 
                    day={date} 
                    onShowEvents={() => {setSelectedDay(date); setShowInfo(true); setShowAddEvent(false)}}
                    onShowAddEvent={() =>{setSelectedDay(date); setShowAddEvent(true); setShowInfo(false)}}
                    />
                    
                ))
            }
        </div>
        <EventModal show={showInfo} day={selectedDay} onClose={() => setShowInfo(false)} />
        <AddEventModal show={showAddEvent} day={selectedDay} onClose={() =>  setShowAddEvent(false)} />
    </>
    
  )
}

export default CalendarMonth