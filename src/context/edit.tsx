import { Dispatch, useState, createContext } from "react"

interface ContextType {
    editMode: boolean,
    setEditMode: Dispatch<boolean>,
    selectedItemId: number | null,
    setSelectedItemId: Dispatch<number | null>
}

const EditContext = createContext<ContextType | undefined>(undefined);

function EditProvider({ children }: {children: React.ReactNode}){

    const [editMode, setEditMode] = useState<boolean>(false);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    return (
        <EditContext.Provider value={{
            editMode,
            setEditMode,
            selectedItemId,
            setSelectedItemId
        }}>
            {children}
        </EditContext.Provider>
    )

}

export {
    EditContext,
    EditProvider
}