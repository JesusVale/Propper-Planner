const API_URL_EVENTS = import.meta.env.VITE_API_URL + "/routine";
import { WeekDay, AssignmentRoutine } from '../types';
import { formatTime } from '../utils/time';

export async function getDayRoutine(day: WeekDay): Promise<AssignmentRoutine[]>{

    const request = await fetch(`${API_URL_EVENTS}/${day}`);
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