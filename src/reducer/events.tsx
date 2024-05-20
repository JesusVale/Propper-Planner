import { Event } from "../types";

enum EventsActionKind {
    ADD_EVENT = "ADD_EVENT",
    REMOVE_EVENT = "REMOVE_EVENT",
    SET_EVENTS = "SET_EVENTS"
}

interface EventsActionId {
    type: EventsActionKind.REMOVE_EVENT,
    payload: number
}

interface EventsActionEvents {
    type: EventsActionKind.SET_EVENTS,
    payload: Event[]
}

interface EventsActionEvent {
    type: EventsActionKind.ADD_EVENT,
    payload: Event
}

type EventsAction = EventsActionId | EventsActionEvent | EventsActionEvents

const initialValue: Event[] = [];

const reducer = (state: Event[], action: EventsAction) =>{
    const { type: actionType, payload:actionPayload } = action;

    switch(actionType){
        case EventsActionKind.SET_EVENTS: {
            const events = actionPayload;
            return events;
        }
        case EventsActionKind.ADD_EVENT: {
            const event = actionPayload;
            const newEvents = structuredClone(state);
            newEvents.push(event as Event)
            return newEvents;
        }
        case EventsActionKind.REMOVE_EVENT: {
            const id = actionPayload;
            const eventoEncontrado = state.findIndex(event => event.id === id);
            const newEvents = structuredClone(state);
            newEvents.splice(eventoEncontrado, 1);
            return newEvents;
        }
    }
    return initialValue;
}

export {
    reducer,
    EventsActionKind
}