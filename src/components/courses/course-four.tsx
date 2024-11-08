import { useEffect, useState } from "react"

import { useCourse } from "../../contexts/CourseContext"
import { useLife } from "../../contexts/LifeContext"
import Button from "../button"

const CourseFour = () => {
  const [answer, setAnswer] = useState<string | null>(null)
  const isAnswerCorrect = answer === "FANE"
  const wrongAnswer = answer && !isAnswerCorrect
  const { setCourseClear } = useCourse()
  const { decreaseLife } = useLife()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputAnswer = (
      e.currentTarget.querySelector(
        "input[name=ptzinha]:checked"
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
        <p>Falando em jogos...</p>
      </div>

      <h2 className="text-xl font-semibold">
        Quem foi o primeiro membro da mundialmente famosa Ptzinha do Crime?
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          <div className="flex gap-2">
            <input type="radio" id="rique" name="ptzinha" value={"RIQUE"} />
            <label htmlFor="rique">Rique</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="fane" name="ptzinha" value={"FANE"} />
            <label htmlFor="fane">Fane</label>
          </div>
          <div className="flex gap-2">
            <input
              type="radio"
              id="rafaplutaum"
              name="ptzinha"
              value={"RAFAPLUTAUM"}
            />
            <label htmlFor="rafaplutaum">Rafa Plutaum</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="ridou" name="ptzinha" value={"RIDOU"} />
            <label htmlFor="ridou">Ridou</label>
          </div>
        </div>

        <Button type="submit" disabled={isAnswerCorrect}>
          confirmar resposta
        </Button>
      </form>

      {answer &&
        (isAnswerCorrect ? (
          <div className="flex flex-col text-center space-y-2 items-center">
            <p>Acertou kkkk, a primeira pessoa a entrar foi a Fane.</p>
            <p>Depois disso, também foi só ladeira abaixo rs</p>
            <div className="flex items-center">
              <img src="/images/omg.png" alt="" height={500} width={200} />
            </div>
          </div>
        ) : (
          <p className="text-red-500">Aff errou.</p>
        ))}
    </div>
  )
}

export default CourseFour
