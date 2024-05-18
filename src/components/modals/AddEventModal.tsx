import ModalWrapper from "./ModalWrapper";

interface Props {
    show: boolean,
    day: Date | null,
    onClose: () => void
}


function AddEventModal({show, day, onClose}: Props) {

  const formattedDate = day?.toISOString().substring(0, 10);

  return (
    <ModalWrapper
    onClose={onClose}
    show={show}
    title="Agregar Evento">


        <form className="flex flex-col gap-3">
          
            <label htmlFor="date" className="font-semibold">Fecha: </label>
            <input name="date" type="date" defaultValue={formattedDate} />

            <label htmlFor="name" className="font-semibold">Nombre Evento: </label>
            <input className="border border-black" type="text" name="name" />

            <button className="bg-main-color text-white rounded-3xl py-1 px-9 font-bold w-fit mt-1 transition-colors duration-300 hover:cursor-pointer hover:bg-hover-color">Agregar</button>

        </form>

    </ModalWrapper>
  )

}

export default AddEventModal