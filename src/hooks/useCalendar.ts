import { useEffect, useState } from "react";
import { MONTHS } from "../constants";
import { useCallback } from "react";

function useCalendar() {
    const currentDate = new Date();
    const [date, setDate] = useState<Date>(currentDate);
    const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const getDaysInMonth = useCallback(() =>{
        setLoading(true);
        const month = date.getMonth();
        const year = date.getFullYear();
        const numDays = new Date(year, month + 1, 0).getDate(); // Get the number of days in the month
        const datesArray = [];

        for (let day = 1; day <= numDays; day++) {
            datesArray.push(new Date(year, month, day));
        }

        setDaysInMonth(datesArray);
        setLoading(false);
    }, [date])

    useEffect(() =>{
        getDaysInMonth();
    },[date, getDaysInMonth])

    function addOne(){
        const copyDate = new Date(date);
        copyDate.setMonth(copyDate.getMonth() + 1)
        setDate(copyDate);
    }

    function removeOne(){
        const copyDate = new Date(date);
        copyDate.setMonth(copyDate.getMonth() - 1)
        setDate(copyDate);
    }

    function getStringDate(){
        return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
    }

    return {
        date,
        daysInMonth,
        addOne,
        removeOne,
        getStringDate, 
        loading
    }
  
}

export default useCalendar