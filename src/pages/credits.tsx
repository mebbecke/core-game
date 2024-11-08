/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react"

import { useCourse } from "../contexts/CourseContext"
import { useLife } from "../contexts/LifeContext"

const Credits = () => {
  const { gameClear } = useCourse()
  const { restoreLife } = useLife()

  // Verifica se o usuário já finalizou o jogo
  useEffect(() => {
    if (gameClear) {
      restoreLife()
    }
  }, [gameClear])

  return (
    <div className="flex flex-col items-center space-y-3">
      <h1 className="text-3xl font-semibold">Créditos</h1>
      <p>
        Feito por{" "}
        <span className="font-semibold hover:text-gray-300">
          <a href="https://www.linkedin.com/in/marina-ebbecke/">
            Marina Ebbecke
          </a>
        </span>{" "}
        com React.js
      </p>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/Y6ljFaKRTrI"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Credits
