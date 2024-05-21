import { useEffect, useState } from "react";
import { PlusIcon } from "../components/icons";
import { WEEK_DAYS } from "../constants";
import { getDayRoutine } from "../services/routines";
import { AssignmentRoutine, WeekDay } from "../types";
import WeekDaySelector from "../components/WeekDaySelector";
import AddRoutineActivity from "../components/modals/AddRoutineActivity";
import { TimeIcon } from "../components/icons";

function Routine() {

  const [routine, setRoutine] = useState<AssignmentRoutine[]>([]);
  const currentWeekDay = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<WeekDay>(WEEK_DAYS[currentWeekDay]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  

  useEffect(() =>{
    async function setRoutines(){
      const routines = await getDayRoutine(selectedDay);
      setRoutine(routines);
    }

    setRoutines();

  },[selectedDay])

  return (
    <section className="mx-auto w-9/12 mt-3">
        <header className="flex gap-1 flex-col">

            <div className="flex justify-between">
              <h2 className="font-bold text-3xl">Mi rutina</h2>

              <button className="bg-main-color text-white p-2 rounded-lg flex gap-2 items-center transition-colors duration-200 hover:bg-hover-color" 
              onClick={() => setShowAddModal(true)}>

                  <span className="font-bold">Agregar Actividad</span>
                  <PlusIcon width={20} height={20} color="#fff" />

              </button>
            </div>
            
            <WeekDaySelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        </header>

        <section className="flex flex-col mt-7 gap-5">

          {
            routine.map(activity =>(
              <article key={`${activity.id}ActivityRoutine`} className="border border-gray-400 rounded-lg">
                <div className="border-b border-gray-400 font-bold py-2 px-3 text-xl">
                  {activity.name}
                </div>
                <div className="flex gap-2 py-2 px-3 items-center">
                  <div className="text-main-color">
                    <TimeIcon width={20} height={20} />
                  </div>
                  <div className="font-semibold">
                    {activity.start} - {activity.end}
                  </div>
                </div>
              </article>
            ))
          }

        </section>
        <AddRoutineActivity 
        onClose={() => setShowAddModal(false)}
        show={showAddModal}
        onAdd={async () =>{
          const routines = await getDayRoutine(selectedDay);
          setRoutine(routines);
        }}
        />
        
    </section>
  )
}

export default Routine
