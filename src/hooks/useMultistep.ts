import { ReactElement, useState } from "react"

import { useCourse } from "../contexts/CourseContext"

export const useMultistep = (steps: ReactElement[]) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0)
  const { setCourseClear } = useCourse()

  // TODO: Implement sessionStorage to save user progress

  const nextStep = () => {
    setCurrentStepIndex((prev) => prev + 1)
    setCourseClear(false)
  }

  const previousStep = () => {
    setCurrentStepIndex((prev) => prev - 1)
  }

  const goToStep = (stepIndex: number) => {
    setCurrentStepIndex(stepIndex)
  }

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    nextStep,
    previousStep,
    goToStep,
    totalSteps: steps.length,
    isLastStep: currentStepIndex === steps.length - 1,
    isFirstStep: currentStepIndex === 0,
  }
}
