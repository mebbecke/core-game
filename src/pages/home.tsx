import { useState } from "react"
import Button from "../components/button"

const Home = () => {
  const [answer, setAnswer] = useState<"yes" | "no" | "">("")

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-semibold">Olá, Gabriel</h1>
      <p>Vamos jogar um jogo?</p>
      <div className="flex flex-row gap-3 mt-6">
        <Button
          className="bg-blue-800 rounded-xl p-2 min-w-16 hover:bg-blue-500"
          onClick={() => setAnswer("yes")}
        >
          sim
        </Button>
        <Button
          className="bg-blue-800 rounded-xl p-2 min-w-16 hover:bg-blue-500"
          onClick={() => setAnswer("no")}
        >
          não
        </Button>
      </div>

      {answer === "yes" && (
        <div className="flex flex-col items-center justify-center mt-6">
          <p>Que bom! Clique em mim para começar.</p>
          <a href="/game">
            <img
              src="/images/courseclear.jpg"
              height={500}
              width={200}
              alt="Uma bela garota sorrindo"
            />
          </a>
        </div>
      )}

      {answer === "no" && (
        <div className="flex flex-col items-center justify-center mt-6">
          <p>vsf então... </p>
          <img
            src="/images/gameover.jpg"
            height={500}
            width={200}
            alt="Uma bela garota chateada"
          />
          <h2 className="tracking-widest font-medium">GAME OVER</h2>
          <p>eu sabia que você ia clicar só pra ver o que acontecia :P</p>
        </div>
      )}
    </div>
  )
}

export default Home
