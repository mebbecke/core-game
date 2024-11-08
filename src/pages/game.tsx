import { useCourse } from "../contexts/CourseContext"
import { useMultistep } from "../hooks/useMultistep"
import Button from "../components/button"
import CourseOne from "../components/courses/course-one"
import CourseTwo from "../components/courses/course-two"
import CourseThree from "../components/courses/course-three"
import CourseFour from "../components/courses/course-four"
import CourseFive from "../components/courses/course-five"
import CourseFinal from "../components/courses/course-final"
import { useNavigate } from "react-router-dom"

const Game = () => {
  const { currentStep, nextStep, isLastStep } = useMultistep([
    <CourseOne key={0} />,
    <CourseTwo key={1} />,
    <CourseThree key={2} />,
    <CourseFour key={3} />,
    <CourseFive key={4} />,
    <CourseFinal key={5} />,
  ])
  const { courseClear } = useCourse()
  const navigate = useNavigate()

  function handleFinalStep() {
    navigate("/credits")
  }

  return (
    <>
      <div className="flex items-center gap-3">{currentStep}</div>

      <div className="flex flex-row flex- w-full items-center justify-center gap-3 mt-10">
        <Button
          onClick={isLastStep ? handleFinalStep : nextStep}
          disabled={!courseClear}
        >
          {isLastStep ? "finalizar" : "próxima fase"}
        </Button>
      </div>
    </>
  )
}

export default Game
