
function RoutineFormSkeleton() {
  return (
    <div className="flex flex-col gap-3">
            
        <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold">Name</label>
            <div className="border h-8 bg-gray-300 animate-pulse rounded-md" />
        </div>
        <div className="flex gap-2 flex-col">

            <span className="font-semibold">Days: </span>
            <div className="flex gap-1">

                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
                <div className="w-8 h-8 rounded-[50%] bg-gray-300 animate-pulse"></div>
          
            </div>
        </div>

        <div className="flex gap-2 flex-col">
            <label htmlFor="start" className="font-semibold">Start</label>
            <div className="w-full h-8 bg-gray-300 animate-pulse" />
        </div>

        <div className="flex gap-2 flex-col">
            <label htmlFor="end" className="font-semibold">End</label>
            <div className="w-full h-8 bg-gray-300 animate-pulse" />
        </div>

        <div>
            <div className="rounded-lg w-full h-6 mt-2 animate-pulse"></div>
        </div>

    </div>
  )
}

export default RoutineFormSkeleton