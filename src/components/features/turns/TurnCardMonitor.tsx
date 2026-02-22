interface TurnCardMonitorProps {
  code: string;
}

export const TurnCardMonitor = ({ code }: TurnCardMonitorProps) => {
  return (
    <div className="border p-2 mt-3 rounded-lg text-lg font-semibold">
      <span>{code}</span>
    </div>
  );
};
