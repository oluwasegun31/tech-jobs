import { ChangeEvent } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="mb-6 w-full flex justify-center items-center">
      <input
        type="text"
        placeholder="Search jobs..."
        value={searchTerm}
        onChange={onSearchChange}
        className="w-full max-w-2xl p-3 border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-full md:text-base text-sm"
      />
    </div>
  );
} 