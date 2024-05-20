import { createContext, useReducer, Dispatch } from "react";
import { reducer, EventsActionKind } from "../reducer/events";
import { Event } from '../types';

interface ContextType {
    events: Event[],
    setEvents: Dispatch<Event[]>,
    addEvent: Dispatch<Event>,
    removeEvent: Dispatch<number>
}

const EventsContext = createContext<ContextType | undefined>(undefined);

function useEventsReducer(){
    const [state, dispatch] = useReducer(reducer, []);

    const addEvent = (event: Event) => dispatch({
        type: EventsActionKind.ADD_EVENT,
        payload: event
    });

    const removeEvent = (id: number) => dispatch({
        type: EventsActionKind.REMOVE_EVENT,
        payload: id
    }); 

    const setEvents = (events: Event[]) => dispatch({
        type: EventsActionKind.SET_EVENTS,
        payload: events
    })

    return {
        addEvent,
        removeEvent,
        setEvents,
        state
    }

}

function EventsProvider({children}: {children: React.ReactNode}){
    const {
        addEvent,
        removeEvent,
        setEvents,
        state
    } = useEventsReducer();


    return (
        <EventsContext.Provider value={{
            addEvent,
            removeEvent,
            setEvents,
            events: state
        }} >

            {children}

        </EventsContext.Provider>
    )
}

export {
    EventsContext,
    EventsProvider
}