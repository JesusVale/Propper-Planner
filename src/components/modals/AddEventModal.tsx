import { FormEvent, useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { createEvent, getEventById, updateEvent } from "../../services/events";
import useEvents from "../../hooks/useEvents";
import useEditMode from "../../hooks/useEditMode";
import { Event } from "../../types";

interface Props {
    show: boolean,
    day?: Date | null,
    onClose: () => void
}


function AddEventModal({show, day = new Date(), onClose}: Props) {

  const [event, setEvent] = useState<Event>({
    name: "",
    date: day?.toISOString().substring(0, 10) as string
  });

  const {
    editMode,
    setEditMode,
    selectedItemId
  } = useEditMode()

  const events = useEvents();

  const formattedDate = day?.toISOString().substring(0, 10);

  useEffect(() =>{

    async function setEventEdit(){
      const eventFetched = await getEventById(selectedItemId as number);
      setEvent(eventFetched);  
    }

    if(editMode){
      setEventEdit();
    }

  },[editMode, selectedItemId])

  function setInitialStateForm(){
    onClose();
    setEditMode(false);
    setEvent({
      name: "",
      date: day?.toISOString().substring(0, 10) as string
    })
  }

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {name, date} = Object.fromEntries(formData.entries());

    if(typeof name == "string" && typeof date == "string" ){
      const eventForm = {
        name, 
        date
      }
      if(editMode){
        const changedEvent = await updateEvent(selectedItemId as number, eventForm);
        events?.setEvent(changedEvent);
      } else{
        const newEvent = await createEvent(eventForm)
        events?.addEvent(newEvent);
      }
      setInitialStateForm();
    }
  }
 
  return (
    <ModalWrapper
    onClose={setInitialStateForm}
    show={show}
    title="Agregar Evento">

        <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
          
            <label htmlFor="date" className="font-semibold">Fecha: </label>
            <input name="date" type="date" defaultValue={editMode? event.date : formattedDate} />

            <label htmlFor="name" className="font-semibold">Nombre Evento: </label>
            <input className="border border-gray-400 rounded-md px-2 py-1 text-sm" defaultValue={event.name} type="text" name="name" />

            <button className="bg-main-color text-white rounded-3xl py-1 px-9 font-bold w-fit mt-1 transition-colors duration-300 hover:cursor-pointer hover:bg-hover-color">Agregar</button>

        </form>

    </ModalWrapper>
  )

}

export default AddEventModal