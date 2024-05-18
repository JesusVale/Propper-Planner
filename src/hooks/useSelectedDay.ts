
import { useContext } from "react"
import { SelectedDayContext } from "../context/selectedDay"

function useSelectedDay() {
    const daySelectedState = useContext(SelectedDayContext);

    if(daySelectedState === undefined){
        throw new Error("El selected day debe estar envuelto en un SelectedDayProvider");
    }

    return daySelectedState;

}

export default useSelectedDay