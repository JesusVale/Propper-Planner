import { EventsContext } from "../context/events"
import { useContext } from "react"

function useEvents() {

    const events = useContext(EventsContext);

    if(events === undefined){
        throw new Error("Elements must be wrapped in an Events Provider");
    }

    return events;

}

export default useEvents