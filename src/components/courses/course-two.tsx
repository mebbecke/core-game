import { useEffect, useState } from "react"
import { useCourse } from "../../contexts/CourseContext"
import Button from "../button"
import { useLife } from "../../contexts/LifeContext"

const CourseTwo = () => {
  const [answer, setAnswer] = useState<number | null>(null)
  const isAnswerCorrect = answer === 4
  const wrongAnswer = answer && !isAnswerCorrect
  const { setCourseClear } = useCourse()
  const { decreaseLife } = useLife()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputAnswer = (
      e.currentTarget.querySelector(
        "input[name=visitas-daisho]:checked"
      ) as HTMLInputElement
    ).value

    setAnswer(Number(inputAnswer))
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
        <h1 className="text-3xl font-semibold">Fase 2</h1>
        <p>Agora, uma pergunta.</p>
      </div>

      <h2 className="text-xl font-semibold">
        Quantas vezes nós fomos no Daisho comer sushi e ser felizes?
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center gap-2"
      >
        <div className="flex gap-3">
          <div className="flex gap-2">
            <input type="radio" id="2" name="visitas-daisho" value={2} />
            <label htmlFor="2">2</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="2" name="visitas-daisho" value={3} />
            <label htmlFor="2">3</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="2" name="visitas-daisho" value={4} />
            <label htmlFor="2">4</label>
          </div>
          <div className="flex gap-2">
            <input type="radio" id="2" name="visitas-daisho" value={5} />
            <label htmlFor="2">5</label>
          </div>
        </div>

        <Button type="submit" disabled={isAnswerCorrect}>
          confirmar resposta
        </Button>
      </form>

      {answer &&
        (isAnswerCorrect ? (
          <div className="text-center space-y-2">
            <p>Isso mesmo! Fomos 4 vezes no Daisho!</p>
            <div className="flex items-center">
              <img
                src="/images/daisho-1.jpg"
                alt="Foto de um belo casal"
                height={500}
                width={200}
              />
              <img
                src="/images/daisho-2.jpg"
                alt="Foto de um belo casal"
                height={500}
                width={200}
              />
              <img
                src="/images/daisho-3.jpg"
                alt="Foto de um belo casal"
                height={500}
                width={200}
              />
              <img
                src="/images/daisho-4.jpg"
                alt="Foto de um belo casal"
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

export default CourseTwo
