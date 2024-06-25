import type { Dispatch, SetStateAction } from "react";

export interface Choice {
  text?: string;
  type?: string;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  choices: Choice[];
  setChoices: (index: number, field: keyof Choice, value: string) => void;
  handleSave: () => void;
}