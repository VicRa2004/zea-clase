import { Edit2 } from "lucide-react";

interface EditButtonProps {
  handleClick?: () => void;
}

export const EditButton = ({ handleClick }: EditButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-indigo-400 hover:bg-indigo-500 transition-colors p-2 rounded-lg text-white"
      type="button"
    >
      <Edit2 />
    </button>
  );
};
