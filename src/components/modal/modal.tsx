import { Button } from "../ui/button"
import { MODAL_TITLE } from "./models/constants"
import { ButtonActions } from "./models/enums"
import { TitleInput } from "../titleinput/titleinput"
import { ChoiceInput } from "../choiceinput/choiceinput"
import type { Choice, ModalProps } from "./models/interfaces"

export const Modal = ({
  isOpen,
  onClose,
  title,
  setTitle,
  choices,
  setChoices,
  handleSave,
}: Readonly<ModalProps>) => {
  const handleChoiceChange = (index: number, field: keyof Choice, value: string) => {
    setChoices(index, field, value);
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-bold mb-4">{MODAL_TITLE}</h2>
        <TitleInput title={title} setTitle={setTitle} />
        {choices.map((choice, index) => (
          <ChoiceInput
            key={index}
            index={index}
            choice={choice}
            handleChoiceChange={handleChoiceChange}
          />
        ))}
        {choices.every((choice) => choice.text && choice.type) && (
          <Button
            onClick={handleSave}
            className="bg-blue-500 text-white p-2 rounded mr-2"
          >
            {ButtonActions.SAVE}
          </Button>
        )}
        <Button
          onClick={onClose}
          variant="default"
          className="bg-red-500 text-white p-2 rounded"
        >
          {ButtonActions.CLOSE}
        </Button>
      </div>
    </div>
  )
}
