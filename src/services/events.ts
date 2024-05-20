import { Event } from "../types";

const API_URL_EVENTS = import.meta.env.VITE_API_URL + "/events";

export async function getEventsByDay(day: Date): Promise<Event[]>{

    const formattedDate = day?.toISOString().substring(0, 10);

    const request = await fetch(`${API_URL_EVENTS}/${formattedDate}`);
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