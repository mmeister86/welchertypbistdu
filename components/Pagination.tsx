"use client";

import { useRouter } from "next/navigation";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function Pagination({
  currentPage,
  totalPages,
}: PaginationProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/tests?page=${page}`);
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 text-gray-800"
      >
        Zurück
      </button>
      <span className="px-4 py-2 text-gray-800 font-medium">
        Seite {currentPage} von {totalPages}
      </span>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 rounded-lg bg-white shadow-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 text-gray-800"
      >
        Weiter
      </button>
    </div>
  );
}
