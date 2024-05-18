import { XIcon } from "../icons"

interface Props {

    onClose: () => void,
    show: boolean,
    children: React.ReactNode,
    title: string

}


function ModalWrapper({onClose, show, children, title}: Props) {


  

  return (
    <div className={`backdrop fixed bg-black bg-opacity-70 left-0 right-0 bottom-0 top-0 transition-all justify-center items-center ${show? "flex" : "hidden"}`}>

        <div className={`modal relative p-4 bg-white rounded-md w-80 ${show? "show-modal" : "hide-modal"}`}>

          <header className="flex justify-between items-center mb-3">

            <h3 className="font-bold text-xl">{title}</h3>
            <button className="close-modal cursor-pointer" onClick={onClose}>

                <XIcon width={20} height={20} />
                
            </button>

          </header>

          {children}

        </div>

    </div>
  )
}

export default ModalWrapper