import { Heart } from "lucide-react"
import { useLife } from "../contexts/LifeContext"

const Header = () => {
  const { life } = useLife()
  const TOTAL_LIFE = 3

  return (
    <header className="flex flex-row w-full items-center justify-between px-10 py-5">
      <nav>
        <ul className="flex flex-row gap-3">
          <li className="hover:text-blue-500">
            <a href="/">início</a>
          </li>
          .
          <li className="hover:text-blue-500">
            <a href="/credits">créditos</a>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-2">
        <h2>Vida </h2>
        <span className="flex flex-row">
          {Array.from({ length: TOTAL_LIFE }).map((_, index) => (
            <span key={index} className="text-red-500">
              <Heart
                fill={index < life ? "currentColor" : "none"}
                stroke={index < life ? "none" : "currentColor"}
              />
            </span>
          ))}
        </span>
      </div>
    </header>
  )
}

export default Header
