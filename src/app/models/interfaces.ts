import { Dispatch, SetStateAction } from "react";

export interface Choice {
  text: string;
  type: string;
}

export interface Question {
  title: string;
  choices: Choice[];
}

export interface UseModalWithQuestions {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  choices: Choice[];
  setChoices: (index: number, field: keyof Choice, value: string) => void;
  questions: Question[];
  handleSave: () => void;
}