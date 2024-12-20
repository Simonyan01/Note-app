import styles from "@styles/note-form.module.scss"
import { useNotes } from "@hooks/useNotes"
import { useForm } from "react-hook-form"
import { INote } from "types/note-types"

export const NoteForm: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<INote>()
    const { addNote } = useNotes()

    const formSubmit = async (data: INote) => {
        const newNote = { ...data }
        await addNote(newNote)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
            <div className={styles.inputGap}>
                <label className={styles.label}>Title</label>
                <input
                    {...register("title", { required: true })}
                    className={styles.typing}
                    placeholder="Enter title"
                />
            </div>
            <div className={styles.inputGap}>
                <label className={styles.label}>Content</label>
                <textarea
                    {...register("content", { required: true })}
                    className={styles.typing}
                    placeholder="Enter content"
                />
            </div>
            <button type="submit" className={styles.addButton} >
                Add Note
            </button>
        </form>
    )
}
