import { motion } from "framer-motion";

interface QuestionPaginationProps {
  currentIndex: number;
  totalQuestions: number;
  answeredQuestions: number[];
  onNavigate: (index: number) => void;
}

export function QuestionPagination({
  currentIndex,
  totalQuestions,
  answeredQuestions,
  onNavigate,
}: QuestionPaginationProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Array.from({ length: totalQuestions }, (_, i) => (
        <motion.button
          key={i}
          onClick={() => onNavigate(i)}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
            i === currentIndex
              ? "bg-red-600 text-white"
              : answeredQuestions.includes(i)
              ? "bg-green-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {i + 1}
        </motion.button>
      ))}
    </div>
  );
}
