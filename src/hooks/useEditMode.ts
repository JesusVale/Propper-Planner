import { useContext } from "react"
import { EditContext } from "../context/edit"

function useEditMode() {
  const editMode = useContext(EditContext);

  if(editMode === undefined){
    throw new Error("Elements must be wrapped in an Edit Provider")
  }

  return editMode;

}

export default useEditMode