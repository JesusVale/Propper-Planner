import { useEffect, useState } from "react";
import { getEventsByDay } from "../../services/events";
import { Event } from "../../types";
import { XIcon } from "../icons";

interface Props {
  show: boolean,
  day: Date | null,
  onClose: () => void
}

function EventModal({ show, day, onClose }: Props) {


  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() =>{

    if(day != null){
      getEventsByDay(day)
      .then(eventsFetched =>{
        setEvents(eventsFetched)
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
          events.length > 0 ?
          <div className="mt-4 flex gap-4 flex-col">
            {
              events.map(event => (
                <div key={`${event.id}${event.name}`} className="px-3 py-4 text-center font-bold text-lg rounded-md bg-slate-400">{event.name}</div>
              ))
            }
          </div>

          :
          <div className="text-4xl text-gray-600 text-center my-6">No hay Eventos</div>
        }

    </aside>
  )
}

export default EventModal