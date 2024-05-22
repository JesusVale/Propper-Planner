const API_URL_EVENTS = import.meta.env.VITE_API_URL + "/routine";
import { WeekDay, AssignmentRoutine } from '../types';
import { formatTime } from '../utils/time';

export async function getDayRoutine(day: WeekDay): Promise<AssignmentRoutine[]>{

    const request = await fetch(`${API_URL_EVENTS}/day/${day}`);
    const routines = await request.json();

    const routinesFormatted = routines.map((routine: AssignmentRoutine) => {
        return {
            ...routine,
            start: formatTime(routine.start),
            end: formatTime(routine.end)
        }
    })

    return routinesFormatted;

}

export async function getRoutineActivityById(id: number) {
    const request = await fetch(`${API_URL_EVENTS}/${id}`);
    const routine = await request.json();

    return routine;
}

export async function addRoutineEvent(assignmentRoutine: AssignmentRoutine){

    const request = await fetch(`${API_URL_EVENTS}/`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(assignmentRoutine)
    });

    const newRoutineActivity = await request.json();

    return newRoutineActivity;

}

export async function deleteRoutineActivity(id: number){

    try{
        await fetch(`${API_URL_EVENTS}/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': "application/json"
            }
        });
        return true;
    } catch(error){
        console.log(error);
        return false;
    }

}

export async function updateRoutineActivity(id: number, routine: AssignmentRoutine) {
    
    try{
        const request = await fetch(`${API_URL_EVENTS}/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(routine)
        });

        const activity = request.json();
        return activity;
    } catch(error){
        console.log(error);
    }

}