'use client'

import { useModals } from "@/context/modal-context"
import { BookConsultationModal } from "./book-consultation-modal"
import { GetStartedFlow } from "./get-started-flow"

export const ModalContainer = () => {
  const { consultationOpen, setConsultationOpen, getStartedOpen, setGetStartedOpen } = useModals()

  return (
    <>
      <BookConsultationModal 
        isOpen={consultationOpen} 
        onClose={() => setConsultationOpen(false)} 
      />
      <GetStartedFlow 
        isOpen={getStartedOpen} 
        onClose={() => setGetStartedOpen(false)} 
      />
    </>
  )
}
