'use client';

import { useState, ChangeEvent } from 'react';
import Link from 'next/link';
import { jobs } from '../data/jobs';
import JobList from '@/components/jobList';
import SearchBar from '@/components/searchBar';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="w-full mx-auto sm:px-12 px-4 font-mono py-8">
      <div className="flex flex-wrap justify-between items-center mb-8 border-b border-b-gray-300 pb-4">
        <h1 className="md:text-4xl text-2xl font-semibold">Job Listings</h1>
        <Link 
          href="/post-job" 
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 md:text-base text-sm font-semibold"
        >
          Post a Job
        </Link>
      </div>
      
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <JobList jobs={jobs} searchTerm={searchTerm} />
    </main>
  );
}