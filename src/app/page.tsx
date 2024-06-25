"use client"

import { Button } from "@/components/ui/button"
import { Modal } from "@/components/modal/modal"
import { useModalWithQuestions } from "./hooks/useModal"
import { BUTTON_TEXT, TITLE } from "./models/constants"

export default function Home() {
  const {
    isModalOpen,
    openModal,
    closeModal,
    title,
    setTitle,
    choices,
    setChoices,
    questions,
    handleSave,
  } = useModalWithQuestions()

  return (
    <div className="p-6 dark:bg-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4 text-white dark:text-gray-200">
        {TITLE}
      </h1>
      <Button
        onClick={openModal}
        className="bg-green-500 text-white p-2 rounded mb-4"
      >
        {BUTTON_TEXT}
      </Button>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
        setTitle={setTitle}
        choices={choices}
        setChoices={setChoices}
        handleSave={handleSave}
      />
      <pre className="bg-gray-100 dark:bg-gray-700 p-4 rounded overflow-auto max-h-96">
        {JSON.stringify(questions, null, 2)}
      </pre>
    </div>
  )
}
