import { BrowserRouter } from "react-router-dom"

import Layout from "./components/layout"
import MainRoutes from "./routes/main-routes"
import { CourseProvider } from "./contexts/CourseContext"
import { LifeProvider } from "./contexts/LifeContext"

function App() {
  return (
    <BrowserRouter>
      <LifeProvider>
        <CourseProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </CourseProvider>
      </LifeProvider>
    </BrowserRouter>
  )
}

export default App
