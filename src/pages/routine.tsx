import { PlusIcon } from "../components/icons"

function Routine() {
  return (
    <section className="mx-auto w-9/12 mt-3">
        <header className="flex justify-between">

            <h2 className="font-bold text-3xl">Mi rutina</h2>

            <button className="bg-main-color text-white p-2 rounded-lg flex gap-2 items-center transition-colors duration-200 hover:bg-hover-color">

                <span className="font-bold">Agregar Actividad</span>
                <PlusIcon width={20} height={20} color="#fff" />

            </button>

        </header>
        
    </section>
  )
}

export default Routine
