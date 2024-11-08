import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | React.ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      className="bg-blue-800 rounded-xl p-2 min-w-28 hover:bg-blue-500 disabled:bg-gray-500"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
