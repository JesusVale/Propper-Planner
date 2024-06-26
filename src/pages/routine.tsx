import { useCallback, useEffect, useState } from "react";
import { PlusIcon } from "../components/icons";
import { WEEK_DAYS } from "../constants";
import { getDayRoutine } from "../services/routines";
import { AssignmentRoutine, WeekDay } from "../types";
import WeekDaySelector from "../components/WeekDaySelector";
import AddRoutineActivity from "../components/modals/AddRoutineActivity";
import RoutineList from "../components/routines/RoutineList";
import { EditProvider } from "../context/edit";
import {Helmet} from "react-helmet";

function Routine() {

  const [routine, setRoutine] = useState<AssignmentRoutine[]>([]);
  const currentWeekDay = new Date().getDay();
  const [selectedDay, setSelectedDay] = useState<WeekDay>(WEEK_DAYS[currentWeekDay]);
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  const onChange = useCallback( async () =>{
    const routines = await getDayRoutine(selectedDay);
    setRoutine(routines);
  }, [selectedDay])

  function onShow(){
    setShowAddModal(true);
  }

  useEffect(() =>{
    async function setRoutines(){
      const routines = await getDayRoutine(selectedDay);
      setRoutine(routines);
    }
    setRoutines();
  },[selectedDay])

  return (
    <EditProvider>
      <Helmet>
        <title>Propper Planner | Routine</title>
        <meta name="Home page" content="Shows a calendary that allows you to create and see events" />
      </Helmet>

      <section className="mx-auto w-9/12 mt-3">

        <header className="flex gap-1 flex-col">

          <div className="flex justify-between">
            <h2 className="font-bold text-3xl">My routine</h2>

            <button className="bg-main-color text-white p-2 rounded-lg flex gap-2 items-center transition-colors duration-200 hover:bg-hover-color" 
            onClick={() => setShowAddModal(true)}>

                <span className="font-bold">Create Activity</span>
                <PlusIcon width={20} height={20} color="#fff" />

            </button>
          </div>
          
          <WeekDaySelector selectedDay={selectedDay} setSelectedDay={setSelectedDay} />

        </header>

        <div className="flex flex-col mt-7 gap-5">

          <RoutineList routines={routine} onChange={onChange} onShow={onShow} />

        </div>
        <AddRoutineActivity 
        onClose={() => setShowAddModal(false)}
        show={showAddModal}
        onAdd={onChange}
        />

      </section>


    </EditProvider>
    
  )
}

export default Routine
