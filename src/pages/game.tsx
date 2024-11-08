import { useCourse } from "../contexts/CourseContext"
import { useMultistep } from "../hooks/useMultistep"
import CourseOne from "../components/courses/course-one"
import CourseTwo from "../components/courses/course-two"
import CourseThree from "../components/courses/course-three"
import Button from "../components/button"

const Game = () => {
  const { currentStep, nextStep } = useMultistep([
    <CourseOne key={0} />,
    <CourseTwo key={1} />,
    <CourseThree key={2} />,
  ])
  const { courseClear } = useCourse()

  return (
    <>
      <div className="flex items-center gap-3">{currentStep}</div>

      <div className="flex flex-row flex- w-full items-center justify-center gap-3 mt-20">
        <Button onClick={nextStep} disabled={!courseClear}>
          próximo
        </Button>
      </div>
    </>
  )
}

export default Game
