import { Event } from "../../types";
import EventCard from "./EventCard";
import ConfirmModal from "../modals/ConfirmModal";
import { useState } from "react";
import { deleteEvent } from "../../services/events";
import useEvents from "../../hooks/useEvents";
import useEditMode from "../../hooks/useEditMode";

interface Props {
    events: Event[],
    onShow: () => void
}

function EventList({ events, onShow }: Props) {

  const [selectedEvent, setSelectedEvent] = useState<null | Event>(null);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const {
    setEditMode,
    setSelectedItemId
  } = useEditMode();

  const {
    removeEvent
  } = useEvents();


  function deleteEventModal(event: Event){
    return () =>{
      setSelectedEvent(event);
      setShowConfirmModal(true);
    }
  }

  function deleteEventConfirm(){
    deleteEvent(selectedEvent?.id)
      .then(valor =>{
        if(valor){
          console.log("se elimino correctamente");
          setShowConfirmModal(false);
          removeEvent(selectedEvent?.id)
        }
      })
  }

  function onEdit(id: number){

    return () =>{
      setEditMode(true);
      setSelectedItemId(id);
      onShow();
      console.log("Pressing edit");
    }

  }

  return (
    <>
        {
          events.length > 0 ?
          <div className="mt-4 flex gap-4 flex-col">
            {
              events.map(event => (
                <EventCard key={`${event.id}${event.name}`} event={event} onClickDelete={deleteEventModal(event)} onClickEdit={onEdit(event.id)} />
              ))
            }
          </div>

          :
          <div className="text-4xl text-gray-600 text-center my-6">No hay Eventos</div>
        }
        <ConfirmModal 
        text={`¿Esta seguro que desea eliminar el evento ${selectedEvent?.name}?`}
        onConfirm={deleteEventConfirm}
        onCancel={() => setShowConfirmModal(false)}
        show={showConfirmModal}
        />
    </>
  )
}

export default EventList