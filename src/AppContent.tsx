import { EditNoteModal } from "@components/EditNoteModal"
import { NotesList } from "@components/NoteList"
import { NoteForm } from "@components/NoteForm"
import { INote } from "types/note-types"
import styles from "./App.module.scss"
import { FC, useState } from "react"

export const AppContent: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [currentNote, setCurrentNote] = useState<INote | null>(null)

    const openModal = (note: INote) => {
        setCurrentNote(note)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setCurrentNote(null)
    }

    return (
        <section className={styles.mainContainer}>
            <div className={styles.subContainer}>
                <h1 className={styles.title}>Notes App</h1>
                <NoteForm />
                <NotesList onEdit={openModal} />
                {isModalOpen && currentNote && (
                    <EditNoteModal
                        note={currentNote}
                        isOpen={isModalOpen}
                        onClose={closeModal}
                    />
                )}
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------------------

// import { EditNoteModal } from "@components/EditNoteModal"
// import { NotesList } from "@components/NoteList"
// import { NoteForm } from "@components/NoteForm"
// import { useNotes } from "@hooks/useNotes"
// import styles from "./App.module.scss"

// export const AppContent: React.FC = () => {
//     const { state, openModal, closeModal } = useNotes()

//     return (
//         <section className={styles.mainContainer}>
//             <div className={styles.subContainer}>
//                 <h1 className={styles.title}>Notes App</h1>
//                 <NoteForm />
//                 <NotesList onEdit={openModal} />
//                 {state.isModalOpen && (
//                     <EditNoteModal
//                         note={state.currentNote}
//                         isOpen={state.isModalOpen}
//                         onClose={closeModal}
//                     />
//                 )}
//             </div>
//         </section>
//     )
// }