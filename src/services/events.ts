import { Event } from "../types";

const API_URL_EVENTS = import.meta.env.VITE_API_URL + "/events";

export async function getEventsByDay(day: Date): Promise<Event[]>{

    const formattedDate = day?.toISOString().substring(0, 10);

    const request = await fetch(`${API_URL_EVENTS}/day/${formattedDate}`);
    const events = await request.json();
    
    return events;

}

export async function createEvent(event: Event): Promise<Event>{

    const request = await fetch(`${API_URL_EVENTS}/`, {
        headers: {
            'Content-Type': "application/json"
        },
        method: "POST",
        body: JSON.stringify(event)
    })

    const eventCreated = request.json();

    return eventCreated;

}

export async function deleteEvent(idEvent: number){
    try{
        await fetch(`${API_URL_EVENTS}/${idEvent}`, {
            headers: {
                'Content-Type': "application/json"
            },
            method: "DELETE",
        })
        return true;
    } catch(error){
        return false;
    }    
}

export async function updateEvent(idEvent: number, event: Event) {

    try{
        const request = await fetch(`${API_URL_EVENTS}/${idEvent}`, {
            headers: {
                'Content-Type': "application/json"
            },
            method: "PUT",
            body: JSON.stringify(event)
        })

        const eventFetched = await request.json()
        return eventFetched;

    } catch(error){
        console.log(error);
    }
}

export async function getEventById(id: number): Promise<Event>{
    const request = await fetch(`${API_URL_EVENTS}/${id}`);
    const event = await request.json();
    return event;
}