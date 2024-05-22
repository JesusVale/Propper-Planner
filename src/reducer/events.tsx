import { Event } from "../types";

enum EventsActionKind {
    ADD_EVENT = "ADD_EVENT",
    REMOVE_EVENT = "REMOVE_EVENT",
    SET_EVENTS = "SET_EVENTS",
    SET_EVENT = "SET_EVENT"
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

interface EventsActionSetEvent {
    type: EventsActionKind.SET_EVENT,
    payload: Event
}

type EventsAction = EventsActionId | EventsActionEvent | EventsActionEvents | EventsActionSetEvent

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
        case EventsActionKind.SET_EVENT: {
            const changedEvent = actionPayload;
            const eventoEncontrado = state.findIndex(event => event.id === changedEvent.id);
            const newEvents = structuredClone(state);
            if(newEvents[eventoEncontrado].date != changedEvent.date){
                newEvents.splice(eventoEncontrado, 1);
            } else{
                newEvents[eventoEncontrado] = changedEvent;
            }
            return newEvents;
        }
    }
    return initialValue;
}

export {
    reducer,
    EventsActionKind
}