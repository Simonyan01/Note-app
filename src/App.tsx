import { NotesProvider } from "@components/NotesProvider"
import { AppContent } from "./AppContent"

const App = () => {
  return (
    <NotesProvider>
      <AppContent />
    </NotesProvider>
  )
}

export default App