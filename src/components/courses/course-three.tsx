import { useEffect, useState } from "react"

import Button from "../button"
import { useCourse } from "../../contexts/CourseContext"
import { useLife } from "../../contexts/LifeContext"

const CourseThree = () => {
  const [answer, setAnswer] = useState<string | null>(null)
  const isAnswerCorrect = answer === "GTAV"
  const wrongAnswer = answer && !isAnswerCorrect
  const { setCourseClear } = useCourse()
  const { decreaseLife } = useLife()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputAnswer = (
      e.currentTarget.querySelector(
        "input[name=primeiro-jogo]:checked"
      ) as HTMLInputElement
    ).value

    setAnswer(inputAnswer)
  }

  // Verificar erros ou acerto
  useEffect(() => {
    if (!answer) return
    if (wrongAnswer) decreaseLife()
    if (isAnswerCorrect) setCourseClear(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer, isAnswerCorrect, wrongAnswer])

  return (
    <div className="space-y-3 text-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Fase 3</h1>
        <p>Vamos para mais uma pergunta.</p>
      </div>

      <h2 className="text-xl font-semibold">
        Qual foi o primeiro jogo que jogamos juntos?
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input
              type="radio"
              id="portal2"
              name="primeiro-jogo"
              value={"PORTAL2"}
            />
            <label htmlFor="portal2">Portal 2</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="borderlands2"
              name="primeiro-jogo"
              value={"BORDERLANDS2"}
            />
            <label htmlFor="borderlands2">Borderlands 2</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="paladins"
              name="primeiro-jogo"
              value={"PALADINS"}
            />
            <label htmlFor="paladins">Paladins</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="gtav" name="primeiro-jogo" value={"GTAV"} />
            <label htmlFor="gtav">GTA V</label>
          </div>
        </div>

        <Button type="submit" disabled={isAnswerCorrect}>
          confirmar resposta
        </Button>
      </form>

      {answer &&
        (isAnswerCorrect ? (
          <div className="flex flex-col text-center space-y-2 items-center">
            <p>Boa! O primeiro jogo que jogamos juntos foi GTA V Online!</p>
            <p>Depois disso foi só ladeira abaixo rs</p>
            <div className="flex items-center">
              <img
                src="/images/gtav.png"
                alt="Capa do GTA V"
                height={500}
                width={200}
              />
            </div>
          </div>
        ) : (
          <p className="text-red-500">Aff errou.</p>
        ))}
    </div>
  )
}

export default CourseThree
