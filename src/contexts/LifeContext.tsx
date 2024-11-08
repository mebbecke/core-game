/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

interface LifeContextProps {
  life: number
  setLife: React.Dispatch<React.SetStateAction<number>>
  decreaseLife: () => void
  restoreLife: () => void
}

export const LifeContext = createContext<LifeContextProps>(
  {} as LifeContextProps
)

interface LifeProviderProps {
  children: React.ReactNode
}

export function LifeProvider({ children }: LifeProviderProps) {
  // TODO: refatorar isso aqui
  const [life, setLife] = useState<number>(() => {
    const storedLife = sessionStorage.getItem("userLife")
    return storedLife ? Number(storedLife) : 3
  })
  const navigate = useNavigate()

  // Atualizar o valor de vida na sessão
  useEffect(() => {
    sessionStorage.setItem("userLife", life.toString())
  }, [life])

  // Navegar para a página de game over caso a vida acabe
  useEffect(() => {
    if (life === 0) {
      navigate("/game-over")
    }
  }, [life])

  // Diminuir a vida
  function decreaseLife() {
    if (life === 0) return
    setLife((prev) => prev - 1)
  }

  // Restaurar a vida e retornar ao início do jogo
  function restoreLife() {
    setLife(3)
    navigate("/game")
  }

  return (
    <LifeContext.Provider value={{ life, setLife, decreaseLife, restoreLife }}>
      {children}
    </LifeContext.Provider>
  )
}

export const useLife = () => {
  const context = useContext(LifeContext)
  if (!context) {
    throw new Error("useLife must be used within a LifeProvider")
  }
  return context
}
