import styles from "@styles/note-item.module.scss"
import { NoteItemProps } from "types/note-types"

export const NoteItem: React.FC<NoteItemProps> = ({ note, onEdit, onDelete }) => {
    return (
        <section className={styles.container}>
            <h3 className={styles.title}>{note.title}</h3>
            <p className={styles.content}>{note.content}</p>
            <div className={styles.buttonBox}>
                <button
                    type="button"
                    onClick={() => onEdit(note)}
                    className={styles.edit}
                >
                    Edit
                </button>
                <button
                    type="button"
                    onClick={() => onDelete(note.id)}
                    className={styles.delete}
                >
                    Delete
                </button>
            </div>
        </section>
    )
}