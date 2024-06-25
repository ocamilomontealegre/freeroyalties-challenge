import { useState } from "react";
import type { Choice, Question, UseModalWithQuestions } from "../models/interfaces";

export const useModalWithQuestions = (): UseModalWithQuestions => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState<string>('');
  const [choices, setChoices] = useState<Choice[]>([
    { text: '', type: '' },
    { text: '', type: '' },
  ]);
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleSave = () => {
    if (title && choices.every(choice => choice.text && choice.type)) {
      const newQuestion: Question = { title, choices };
      setQuestions([...questions, newQuestion]);
      setTitle('');
      setChoices([{ text: '', type: '' }, { text: '', type: '' }]);
      setIsModalOpen(false);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTitleChange: React.Dispatch<React.SetStateAction<string>> = setTitle;

  const handleChoiceChange = (index: number, field: keyof Choice, value: string) => {
    setChoices(prevChoices => {
      const newChoices = [...prevChoices];
      newChoices[index][field] = value;
      return newChoices;
    });
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
    title,
    setTitle: handleTitleChange,
    choices,
    setChoices: handleChoiceChange,
    questions,
    handleSave,
  };
};