import { useEffect, useState } from "react";
import { getEventsByDay } from "../../services/events";
import { XIcon } from "../icons";
import EventList from "../events/EventList";
import useEvents from "../../hooks/useEvents";

interface Props {
  show: boolean,
  day: Date | null,
  onClose: () => void,
  onShow: () => void
}

function EventModal({ show, day, onClose, onShow }: Props) {

  const {
    events,
    setEvents
  } = useEvents();

  const [loading, setLoading] = useState(false);

  useEffect(() =>{

    if(day != null){
      setLoading(true);
      getEventsByDay(day)
      .then(eventsFetched =>{
        setEvents(eventsFetched)
        setLoading(false);
      });
    }

  },[day])

  return (
    <aside className={`absolute px-5 top-0 bottom-0 right-0 w-1/4 bg-white transition-transform duration-100 ease-in-out border-l border-black${ show? " translate-x-0" : " translate-x-full" }`}>

        <header className=" py-3 flex justify-between items-center">

          <h4 className="font-bold text-3xl">
            Eventos - {day?.toLocaleDateString()}
          </h4>
          <button className="cursor-pointer" onClick={onClose}>
            <XIcon width={25} height={25} />
          </button>
          
        </header>
        
        {
          loading ?
          (
            <div className="mt-4 flex gap-4 flex-col">
              <div className="px-3 py-4 text-center font-bold bg-gray-400 rounded-md animate-pulse">....</div>
              <div className="px-3 py-4 text-center font-bold bg-gray-400 rounded-md animate-pulse">....</div>
            </div>
          )
          :
          <EventList events={events} onShow={onShow} />
        }

    </aside>
  )
}

export default EventModal