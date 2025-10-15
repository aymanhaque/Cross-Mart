import { router } from "./constants/router/router"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {
  return (
    <ThemeProvider>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </ThemeProvider>
  )
}

export default App