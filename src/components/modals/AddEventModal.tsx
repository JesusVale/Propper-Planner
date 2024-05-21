import { FormEvent } from "react";
import ModalWrapper from "./ModalWrapper";
import { createEvent } from "../../services/events";
import useEvents from "../../hooks/useEvents";

interface Props {
    show: boolean,
    day: Date | null,
    onClose: () => void
}


function AddEventModal({show, day, onClose}: Props) {

  const formattedDate = day?.toISOString().substring(0, 10);

  const events = useEvents();

  async function handleOnSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const {name, date} = Object.fromEntries(formData.entries());

    if(typeof name == "string" && typeof date == "string" ){
      const newEvent = await createEvent({name, date})
      events?.addEvent(newEvent);
      onClose();
    }
  }
 
  return (
    <ModalWrapper
    onClose={onClose}
    show={show}
    title="Agregar Evento">


        <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
          
            <label htmlFor="date" className="font-semibold">Fecha: </label>
            <input name="date" type="date" defaultValue={formattedDate} />

            <label htmlFor="name" className="font-semibold">Nombre Evento: </label>
            <input className="border border-gray-400 rounded-md px-2 py-1 text-sm" type="text" name="name" />

            <button className="bg-main-color text-white rounded-3xl py-1 px-9 font-bold w-fit mt-1 transition-colors duration-300 hover:cursor-pointer hover:bg-hover-color">Agregar</button>

        </form>

    </ModalWrapper>
  )

}

export default AddEventModal