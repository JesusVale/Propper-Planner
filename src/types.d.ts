import { WEEK_DAYS } from "./constants";

export type WeekDay = typeof WEEK_DAYS[number];

export interface AssignmentRoutine {
    id?: int,
    name: string,
    start: string,
    end: string,
    days: WeekDay[];
}

export interface Event {
    id?: int,
    name: string,
    date: Date | string
}