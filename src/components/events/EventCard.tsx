import { Event } from "../../types"
import { DeleteIcon } from "../icons"

interface Props {
    event: Event,
    onClickDelete: () => void
}

function EventCard({ event, onClickDelete }: Props) {
  return (
    <div key={`${event.id}${event.name}`} className="px-3 text-white py-4 text-center font-bold text-lg rounded-md bg-main-color flex justify-between items-center">
        <span>
            {event.name}
        </span>
        <div>
            <button onClick={onClickDelete} className="bg-red-600 p-1 rounded-md transition-colors hover:bg-red-400">
                <DeleteIcon width={16} height={16} color="#fff" />
            </button>
        </div>
    </div>
  )
}

export default EventCard