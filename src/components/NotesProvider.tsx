import { addNote, deleteNote, editNote, getNotes } from "@context/api"
import { FC, ReactNode, useEffect, useReducer } from "react"
import { INote, Types } from "types/note-types"
import { NotesContext } from "@context/context"
import { initialState } from "@context/state"
import { reducer } from "@context/reducer"

export const NotesProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const handleAddNote = async (note: INote) => {
        const newNote = await addNote(note)
        dispatch({ type: Types.ADD_NOTE, payload: newNote })
    }

    const handleEditNote = async (note: INote) => {
        const updatedNote = await editNote(note)
        dispatch({ type: Types.EDIT_NOTE, payload: updatedNote })
    }

    const handleRemoveNote = async (id: string) => {
        await deleteNote(id)
        dispatch({ type: Types.DELETE_NOTE, payload: id })
    }

    // const openModal = (note: INote) => {
    //     dispatch({ type: ModalTypes.OPEN_MODAL, payload: note })
    // }

    // const closeModal = () => {
    //     dispatch({ type: ModalTypes.CLOSE_MODAL })
    // }

    useEffect(() => {
        getNotes()
            .then((notes) => {
                dispatch({ type: Types.SET_NOTES, payload: notes })
            })
    }, [dispatch])

    return (
        <NotesContext.Provider value={{
            state, dispatch,
            addNote: handleAddNote,
            editNote: handleEditNote,
            deleteNote: handleRemoveNote,
            // openModal, closeModal
        }}>
            {children}
        </NotesContext.Provider>
    )
}

