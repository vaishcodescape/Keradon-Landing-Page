interface ButtonProps {
  children?: React.ReactNode;
}

export default function Button({ children = 'Start Exploring' }: ButtonProps) {
  return (
    <button className="bg-white text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-bounce-subtle shadow-[0_0_20px_rgba(255,255,255,0.3)]">
      {children}
    </button>
  );
} 