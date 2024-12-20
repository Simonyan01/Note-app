import { EditNoteProps, INote } from "types/note-types"
import styles from "@styles/edit-modal.module.scss"
import { useNotes } from "@hooks/useNotes"
import { useForm } from "react-hook-form"
import Modal from "react-modal"

export const EditNoteModal: React.FC<EditNoteProps> = ({ isOpen, note, onClose }) => {
    const { editNote } = useNotes()
    const { register, handleSubmit, reset } = useForm<INote>({
        defaultValues: note || { title: "", content: "" },
    })

    const formSubmit = async (data: INote) => {
        if (note) {
            editNote({ ...note, ...data })
            reset()
            onClose()
        }
    }

    return (
        <Modal isOpen={isOpen} onRequestClose={onClose} ariaHideApp={false}>
            <form onSubmit={handleSubmit(formSubmit)} className={styles.editForm}>
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
                <div className={styles.buttonBox}>
                    <button
                        type="button"
                        onClick={onClose}
                        className={styles.cancel}
                    >
                        Cancel
                    </button>
                    <button className={styles.save}>
                        Save
                    </button>
                </div>
            </form>
        </Modal>
    )
}