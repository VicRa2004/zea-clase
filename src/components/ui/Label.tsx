interface LabelProps {
  children: string;
  className?: string;
  htmlFor?: string;
}

export const Label = ({ children, htmlFor, className }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`text-md font-medium text-slate-700 ${className}`}
    >
      {children}
    </label>
  );
};
