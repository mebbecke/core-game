import { useEffect, useState } from "react"

import Button from "../button"
import { useCourse } from "../../contexts/CourseContext"
import { useLife } from "../../contexts/LifeContext"

const CourseFive = () => {
  const [answer, setAnswer] = useState<string | null>(null)
  const isAnswerCorrect = answer === "LULALIVRE"
  const wrongAnswer = answer && !isAnswerCorrect
  const { setCourseClear } = useCourse()
  const { decreaseLife } = useLife()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputAnswer = (
      e.currentTarget.querySelector(
        "input[name=evento]:checked"
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
        <h1 className="text-3xl font-semibold">Fase 5</h1>
        <p>Agora, o enigma final. Observe bem as imagens e me diga:</p>
      </div>

      <h2 className="text-xl font-semibold">
        Qual evento global marca o início de nosso relacionamento?
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <div className="flex flex-row gap-3">
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/enigma-1.png"
              alt="Primeira imagem do enigma"
              height={300}
              width={300}
            />
            <input
              type="radio"
              id="pandemia"
              name="evento"
              value={"PANDEMIA"}
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <img
              src="/images/enigma-2.png"
              alt="Segunda imagem do enigma"
              height={300}
              width={300}
            />
            <input
              type="radio"
              id="lulalivre"
              name="evento"
              value={"LULALIVRE"}
            />
          </div>
        </div>

        <Button type="submit" disabled={isAnswerCorrect}>
          confirmar resposta
        </Button>
      </form>

      {answer &&
        (isAnswerCorrect ? (
          <div className="text-center space-y-2">
            <p>AEEEEEEEEEEEEEEEEEEEEE</p>
            <p>Depois disso, adivinha? Também foi só ladeira abaixo KKKKKKK</p>
            <p>Brincadeira, te amo. Avance para receber seus louros.</p>
          </div>
        ) : (
          <p className="text-red-500">Aff errou.</p>
        ))}
    </div>
  )
}

export default CourseFive
