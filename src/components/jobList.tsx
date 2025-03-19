"use client"
import { useState } from 'react';
import { Job } from '@/data/jobs';
import JobCard from './jobCard';

interface JobListProps {
  jobs: Job[];
  searchTerm: string;
}

export default function JobList({ jobs, searchTerm }: JobListProps) {
  const [visibleJobs, setVisibleJobs] = useState(6);
  
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const showMoreJobs = () => {
    setVisibleJobs(prev => Math.min(prev + 4, filteredJobs.length));
  };
  
  return (
    <section className='w-full bg-gray-800/20 p-4 rounded-lg'>
      <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        {filteredJobs.slice(0, visibleJobs).map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
      
      {visibleJobs < filteredJobs.length && (
        <div className="mt-6 text-center">
          <button 
            onClick={showMoreJobs}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
      
      {filteredJobs.length === 0 && (
        <p className="text-center text-gray-800 my-8 md:text-2xl text-base">No jobs found matching your search.</p>
      )}
    </section>
  );
}