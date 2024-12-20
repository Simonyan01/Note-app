import { IContext } from "types/note-types"
import { createContext } from "react"

export const NotesContext = createContext<IContext | undefined>(undefined)
