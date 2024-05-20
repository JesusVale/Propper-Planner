import useCalendar from "../hooks/useCalendar";
import { RightArrow, LeftArrow } from "../components/icons";
import CalendarMonth from "../components/calendar/CalendarMonth";
import { EventsProvider } from "../context/events";

function Calendary() {

  const { addOne, removeOne, getStringDate, daysInMonth, loading } = useCalendar();

  return (
    <div className="mx-auto w-9/12">
      <div className="flex justify-between">
        <button onClick={removeOne} className="bg-main-color rounded-[50%] w-12 h-12 flex justify-center items-center">
          <LeftArrow color="#fff" width={30} height={30} />
        </button>
        <h1 className="text-center my-2 font-title-font text-3xl font-semibold">{getStringDate()}</h1>
        <button onClick={addOne} className="bg-main-color rounded-[50%] w-12 h-12 flex justify-center items-center">
          <RightArrow color="#fff" width={25} height={25} />
        </button>
      </div>
      {
        loading ? 
        <div>Cargando...</div>
        :
        <EventsProvider>
          <>   
            <CalendarMonth daysMonth={daysInMonth} />
          </>
        </EventsProvider>
      }
      
      
    </div>
    
  )
}

export default Calendary