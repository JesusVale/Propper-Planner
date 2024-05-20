import ModalWrapper from "./ModalWrapper";

interface Props {
    text: string,
    onConfirm: () => void,
    onCancel: () => void,
    show: boolean
}

function ConfirmModal({ text, onConfirm, onCancel, show }: Props) {

  return (
     <ModalWrapper 
     title="Confirm"
     show={show}
     onClose={onCancel}
     >

        <p >{text}</p>

        <div className="flex gap-2 mt-2">
            <button onClick={onConfirm} className="bg-green-500 hover:bg-green-400 transition-colors text-white py-1 px-3 font-bold">Confirmar</button>
            <button onClick={onCancel} className="bg-red-500 hover:bg-red-400 transition-colors text-white py-1 px-3 font-bold">Cancelar</button>
        </div>
        
     </ModalWrapper>
  )
}

export default ConfirmModal