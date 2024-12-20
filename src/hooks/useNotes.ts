import { NotesContext } from "@context/context"
import { useContext } from "react"

export const useNotes = () => {
  const context = useContext(NotesContext)

  if (!context) {
    throw new Error("useNotes should be used within certain limits")
  }

  return context
}
