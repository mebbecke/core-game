import { useEffect } from "react"
import { useCourse } from "../../contexts/CourseContext"

const CourseFinal = () => {
  const { setCourseClear } = useCourse()

  useEffect(() => {
    setCourseClear(true)
  }, [setCourseClear])

  return (
    <div className="space-y-3 text-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold">Parabéns, corinho ❤️</h1>
        <p>Aproveite essas belas fotos do início do namoro:</p>
      </div>

      <div className="flex items-center">
        <img
          src="/images/final-1.jpg"
          alt="Foto de um belo casal"
          height={500}
          width={200}
        />
        <img
          src="/images/final-2.jpg"
          alt="Foto de um belo casal"
          height={500}
          width={200}
        />
        <img
          src="/images/final-3.jpg"
          alt="Foto de um belo casal"
          height={500}
          width={200}
        />
        <img
          src="/images/final-4.jpg"
          alt="Foto de um belo casal"
          height={500}
          width={200}
        />
      </div>
    </div>
  )
}

export default CourseFinal
