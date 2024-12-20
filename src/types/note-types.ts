import { Dispatch } from "react"

export interface INote {
  id: string
  title: string
  content: string
}

export interface IState {
  notes: INote[]
  // currentNote: INote | null
  // isModalOpen: boolean
}

export interface IAction {
  type: Types // | ModalTypes
  payload?: unknown
}

export interface IContext {
  state: IState
  dispatch: Dispatch<IAction>
  addNote: (note: INote) => Promise<void>
  editNote: (note: INote) => Promise<void>
  deleteNote: (id: string) => Promise<void>
  // openModal: (note: INote) => void
  // closeModal: () => void
}

export enum Types {
  SET_NOTES,
  ADD_NOTE,
  EDIT_NOTE,
  DELETE_NOTE,
}

// export enum ModalTypes {
//   OPEN_MODAL,
//   CLOSE_MODAL,
// }

// NOTE PROPS ------------------------

export type NoteFormProps = {
  onSubmit: (data: INote) => void
}

export type EditNoteProps = {
  note: INote | null
  isOpen: boolean
  onClose: () => void
}

export type NoteActions = {
  onEdit: (note: INote) => void
  onDelete: (id: string) => void
}

export type NoteListProps = NoteActions & {
  notes: INote[]
}

export type NoteItemProps = NoteActions & {
  note: INote
}

export type Edit = Pick<NoteActions, "onEdit">
