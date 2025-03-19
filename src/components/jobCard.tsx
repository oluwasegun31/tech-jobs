import Link from "next/link";
import { Job } from "../data/jobs";

interface JobCardProps {
  job: Job;
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Link href={`/job/${job.id}`}>
      <section className="border-2 rounded-lg p-4 h-full cursor-pointer bg-white flex flex-col justify-start items-start gap-2">
        <div className="flex justify-start items-center gap-4">
          <div className="size-10 rounded-full bg-gradient-to-br from-indigo-600 to-purple-500"/>
          <div className="flex flex-col justify-start items-start gap-1">
            <h2 className="md:text-xl text-base font-semibold leading-none">{job.title}</h2>
            <p className="text-blue-700 leading-none md:text-base text-sm">{job.company}</p>
          </div>
        </div>
        <p className="text-gray-800 mt-2 line-clamp-2 leading-tight md:text-base text-sm">{job.description}</p>
        <div className="mt-2 text-gray-800 flex justify-start items-center gap-1 flex-wrap text-sm">
          <span className="px-3 py-2 bg-black text-white rounded-full text-sm">{job.location}</span>
          <span className="mx-2">•</span>
          <span>Posted on {new Date(job.postedDate).toLocaleDateString()}</span>
        </div>
      </section>
    </Link>
  );
}
