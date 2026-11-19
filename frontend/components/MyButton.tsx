
type MyButtonProps = {
  text: string;
  color?: string;
};

export default function MyButton({ text, color = "black" }: MyButtonProps) {
  return (
    <button
      style={{ backgroundColor: color }}
      className="rounded-lg px-6 py-3 text-sm font-medium text-white transition hover:opacity-80"
    >
      {text}
    </button>
  );
}
