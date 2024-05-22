import { Event } from "../../types"
import { DeleteIcon, EditIcon } from "../icons"

interface Props {
    event: Event,
    onClickDelete: () => void
    onClickEdit: () => void
}

function EventCard({ event, onClickDelete, onClickEdit }: Props) {

  return (
    <div key={`${event.id}${event.name}`} className="px-3 py-4 text-center font-bold text-lg rounded-md border border-gray-400 flex justify-between items-center">
        <span>
            {event.name}
        </span>
        <div className="flex gap-2">

            <button onClick={onClickDelete} className="bg-red-600 text-white p-1 rounded-md transition-colors hover:bg-red-400">
                <DeleteIcon width={16} height={16} />
            </button>
            <button onClick={onClickEdit} className="bg-main-color text-white p-1 rounded-md transition-colors hover:bg-hover-color">
                <EditIcon width={16} height={16} />
            </button>

        </div>
    </div>
  )
}

export default EventCard