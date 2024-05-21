
export function formatTime(time: string){
    const [hour, minutes] = time.split(":");
    let numberHour = Number(hour);
    let timeZone = "am";
    if(numberHour > 12){
        numberHour = numberHour - 12;
        timeZone = "pm"; 
    } else if(numberHour == 12){
        timeZone = "pm";
    } else if(numberHour == 0){
        numberHour = 12;
        timeZone = "am";
    }
    
    return `${numberHour}:${minutes}${timeZone}`;
}