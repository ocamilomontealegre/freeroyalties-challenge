export interface Choice {
  text?: string;
  type?: string;
}

export interface ChoiceInputProps {
  index: number;
  choice: Choice;
  handleChoiceChange: (index: number, field: keyof Choice, value: string) => void;
}