import { useCourse } from "../contexts/CourseContext"
import { useMultistep } from "../hooks/useMultistep"
import Button from "../components/button"
import CourseOne from "../components/courses/course-one"
import CourseTwo from "../components/courses/course-two"
import CourseThree from "../components/courses/course-three"
import CourseFour from "../components/courses/course-four"

const Game = () => {
  const { currentStep, nextStep } = useMultistep([
    <CourseOne key={0} />,
    <CourseTwo key={1} />,
    <CourseThree key={2} />,
    <CourseFour key={3} />,
  ])
  const { courseClear } = useCourse()

  return (
    <>
      <div className="flex items-center gap-3">{currentStep}</div>

      <div className="flex flex-row flex- w-full items-center justify-center gap-3 mt-10">
        <Button onClick={nextStep} disabled={!courseClear}>
          próximo
        </Button>
      </div>
    </>
  )
}

export default Game
