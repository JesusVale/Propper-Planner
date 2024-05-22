
interface BasicIconProps {
    width: number,
    height: number,
    color?: `#${string}`
}

export function CalendarIcon({width, height, color}: BasicIconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} className="icon icon-tabler icon-tabler-calendar-month" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="3.25 2.25 17.5 19.5">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"></path>
            <path d="M16 3v4"></path>
            <path d="M8 3v4"></path>
            <path d="M4 11h16"></path>   
            <path d="M7 14h.013"></path>  
            <path d="M10.01 14h.005"></path>   
            <path d="M13.01 14h.005"></path>   
            <path d="M16.015 14h.005"></path>   
            <path d="M13.015 17h.005"></path>   
            <path d="M7.01 17h.005"></path>   
            <path d="M10.01 17h.005"></path> 
        </svg>
    )
}

export function RightArrow({width, height, color}: BasicIconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width={width} height={height} strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="4.25 5.25 15.5 13.5">   
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   
            <path d="M5 12l14 0"></path>   
            <path d="M13 18l6 -6"></path>   
            <path d="M13 6l6 6"></path> 
        </svg>
    )
}

export function LeftArrow({width, height, color}: BasicIconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-left" width={width} height={height} strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="4.25 5.25 15.5 13.5">   
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>   
            <path d="M5 12l14 0"></path>   
            <path d="M5 12l6 6"></path>   
            <path d="M5 12l6 -6"></path> 
        </svg>
    )
}

export function EventIcon({width, height, color="#000"}: BasicIconProps) {

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-event" viewBox="0 0 24 24" strokeWidth="1.7" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" width={width} height={height}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M4 5m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
            <path d="M16 3l0 4" />
            <path d="M8 3l0 4" />
            <path d="M4 11l16 0" />
            <path d="M8 15h2v2h-2z" />
        </svg>
    )

}

export function XIcon({width, height, color="#000"}: BasicIconProps){

    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </svg>
    )

}

export function CalendarPlusIcon({width, height, color="#000"}: BasicIconProps){

    return (

        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-plus" width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12.5 21h-6.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
            <path d="M16 3v4" />
            <path d="M8 3v4" />
            <path d="M4 11h16" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
        </svg>

    )
}

export function PlusIcon({width, height, color="#000"}: BasicIconProps){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-plus" width={width} height={height} viewBox="0 0 24 24" strokeWidth="2" stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 5l0 14" />
            <path d="M5 12l14 0" />
        </svg>
    )
}

export function DeleteIcon({width, height}: BasicIconProps){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash-filled" width={width} height={height} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" strokeWidth="0" fill="currentColor" />
            <path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" strokeWidth="0" fill="currentColor" />
        </svg>
    )
    
}

export function TimeIcon({width, height}: BasicIconProps){
    return (

        <svg  xmlns="http://www.w3.org/2000/svg"  width={width}  height={height}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-clock-hour-4">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 12l3 2" />
            <path d="M12 7v5" />
        </svg>

    )
}

export function EditIcon({width, height}: BasicIconProps){
    return (
        <svg  xmlns="http://www.w3.org/2000/svg"  width={width}  height={height}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2.5"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-edit">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" />
            <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" />
            <path d="M16 5l3 3" />
        </svg>
    )
}