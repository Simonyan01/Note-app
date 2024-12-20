import { IAction, IState, Types, INote } from "types/note-types"

export const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case Types.SET_NOTES:
      return { ...state, notes: action.payload as INote[] }
    case Types.ADD_NOTE:
      return { ...state, notes: [...state.notes, action.payload as INote] }
    case Types.EDIT_NOTE:
      return {
        ...state,
        notes: state.notes.map((note) => {
          return note.id === (action.payload as INote).id ? (action.payload as INote) : note
        }),
      }
    case Types.DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== (action.payload as string)),
      }
    // case ModalTypes.OPEN_MODAL:
    //   return { ...state, currentNote: action.payload as INote, isModalOpen: true }
    // case ModalTypes.CLOSE_MODAL:
    //   return { ...state, currentNote: null, isModalOpen: false }
    default:
      return state
  }
}
