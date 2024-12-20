import styles from "@styles/notes-list.module.scss"
import { useNotes } from "@hooks/useNotes"
import { Edit } from "types/note-types"
import { NoteItem } from "./NoteItem"

export const NotesList: React.FC<Edit> = ({ onEdit }) => {
    const { state, deleteNote } = useNotes()

    return (
        <section className={styles.container}>
            {
                state.notes.length > 0 ? (
                    state.notes?.map((note) => (
                        <NoteItem
                            key={note.id}
                            note={note}
                            onEdit={onEdit}
                            onDelete={(id) => deleteNote(id)}
                        />
                    ))
                ) : (
                    <p className={styles.unavailable}>No notes available</p>
                )
            }
        </section>
    )
}