import Button from "../components/button"
import { useLife } from "../contexts/LifeContext"

const GameOver = () => {
  const { restoreLife } = useLife()

  return (
    <div className="flex flex-col items-center gap-3">
      <h1 className="text-4xl font-semibold">game over :(</h1>
      <p>É uma pena que vc seja tão burrico.</p>
      <Button onClick={restoreLife}>tentar novamente</Button>
    </div>
  )
}

export default GameOver
