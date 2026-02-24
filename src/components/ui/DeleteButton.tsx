import { Trash2 } from "lucide-react";

interface DeleteButtonProps {
  handleClick?: () => void;
}

export const DeleteButton = ({ handleClick }: DeleteButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className="bg-red-400 hover:bg-red-500 transition-colors p-2 rounded-lg text-white"
      type="button"
    >
      <Trash2 />
    </button>
  );
};
