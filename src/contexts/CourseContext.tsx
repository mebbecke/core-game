/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react"

interface CourseContextProps {
  courseClear: boolean
  setCourseClear: React.Dispatch<React.SetStateAction<boolean>>
}

export const CourseContext = createContext<CourseContextProps>(
  {} as CourseContextProps
)

interface CourseProviderProps {
  children: React.ReactNode
}

export function CourseProvider({ children }: CourseProviderProps) {
  const [courseClear, setCourseClear] = useState(false)

  return (
    <CourseContext.Provider value={{ courseClear, setCourseClear }}>
      {children}
    </CourseContext.Provider>
  )
}

export const useCourse = () => {
  const context = useContext(CourseContext)
  if (!context) {
    throw new Error("useCourse must be used within a CourseProvider")
  }
  return context
}
