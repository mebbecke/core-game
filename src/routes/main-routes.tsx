import { Route, Routes } from "react-router-dom"

import Home from "../pages/home"
import Game from "../pages/game"
import GameOver from "../pages/gameover"
import Credits from "../pages/credits"

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/game-over" element={<GameOver />} />
      <Route path="/credits" element={<Credits />} />
    </Routes>
  )
}

export default MainRoutes
