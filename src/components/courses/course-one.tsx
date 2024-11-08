import { useEffect, useState } from "react"
import { useCourse } from "../../contexts/CourseContext"
import { useLife } from "../../contexts/LifeContext"
import Button from "../button"

const CourseOne = () => {
  const [name, setName] = useState<string>()
  const isNameCorrect = name === "Corinho" || name === "corinho"
  const nameIsWrong = name && !isNameCorrect
  const { setCourseClear } = useCourse()
  const { decreaseLife } = useLife()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputName = (
      e.currentTarget.querySelector("#name") as HTMLInputElement
    ).value
    setName(inputName)
  }

  // Verificar erros ou acerto
  useEffect(() => {
    if (!name) return
    if (nameIsWrong) decreaseLife()
    if (isNameCorrect) setCourseClear(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, isNameCorrect, nameIsWrong])

  return (
    <div className="space-y-3 text-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Fase 1</h1>
        <p>Mas antes, uma coisa.</p>
      </div>
      <p>Acho que errei seu nome, não é mesmo?</p>
      <p>Como posso te chamar?</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          id="name"
          type="text"
          placeholder="Digite seu nome"
          className="rounded-lg p-3 focus:outline-none"
          disabled={isNameCorrect}
        />
        <Button type="submit" disabled={isNameCorrect}>
          é esse o meu nome!
        </Button>
      </form>

      {name &&
        (isNameCorrect ? (
          <div className="text-center space-y-2">
            <p>Ahhh agora sim, {name}!</p>
          </div>
        ) : (
          <p className="text-red-500">Não é esse o seu nome...</p>
        ))}
    </div>
  )
}

export default CourseOne
