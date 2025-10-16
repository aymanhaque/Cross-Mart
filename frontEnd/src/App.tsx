import { router } from "./constants/router/router"
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./contexts/ThemeContext"
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div className="">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </Provider>
  )
}

export default App