import { INote } from "types/note-types"
import axios from "axios"

const API = axios.create({
  baseURL: "http://localhost:8080",
})

export const getNotes = async (): Promise<INote[]> => {
  try {
    const response = await API.get("/notes")
    return response.data
  } catch (err) {
    throw new Error(`Failed to get notes: ${err}`)
  }
}

export const addNote = async (note: INote): Promise<INote> => {
  try {
    const response = await API.post("/notes", note)
    return response.data
  } catch (err) {
    throw new Error(`Failed to post note: ${err}`)
  }
}

export const editNote = async (note: INote): Promise<INote> => {
  try {
    const response = await API.put(`/notes/${note.id}`, note)
    return response.data
  } catch (err) {
    throw new Error(`Failed to edit note: ${err}`)
  }
}

export const deleteNote = async (id: string): Promise<void> => {
  try {
    const response = await API.delete(`/notes/${id}`)
    return response.data
  } catch (err) {
    throw new Error(`Failed to delete note: ${err}`)
  }
}
