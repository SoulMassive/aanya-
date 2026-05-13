'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

interface ModalContextType {
  consultationOpen: boolean
  setConsultationOpen: (open: boolean) => void
  getStartedOpen: boolean
  setGetStartedOpen: (open: boolean) => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [getStartedOpen, setGetStartedOpen] = useState(false)

  return (
    <ModalContext.Provider 
      value={{ 
        consultationOpen, 
        setConsultationOpen, 
        getStartedOpen, 
        setGetStartedOpen 
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export const useModals = () => {
  const context = useContext(ModalContext)
  if (context === undefined) {
    throw new Error('useModals must be used within a ModalProvider')
  }
  return context
}
