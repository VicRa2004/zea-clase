import { ChevronDown } from "lucide-react";
import { Label } from "./Label";

interface SelectOption {
  text: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  options: SelectOption[];
  className?: string;
}

export const Select = ({ options, label, className, name }: SelectProps) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <Label>{label}</Label>
      <div className="relative">
        <select
          id={name}
          name={name}
          className={`w-full appearance-none rounded-lg border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm text-slate-900 transition-all focus:border-indigo-500 focus:outline-none focus:ring-3 focus:ring-indigo-500/10 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        >
          {options.map((option, key) => (
            <option key={key} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-slate-500">
          <ChevronDown size={18} />
        </div>
      </div>
    </div>
  );
};
