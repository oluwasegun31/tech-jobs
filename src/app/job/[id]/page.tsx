import { notFound } from "next/navigation";
import Link from "next/link";
import { jobs } from "@/data/jobs";
interface JobDetailsProps {
  params: Promise<{ id: string }>;
}
export default async function JobDetail({ params }: JobDetailsProps) {
  const { id } = await params;
  const job = jobs.find((job) => job.id === id);

  if (!job) {
    notFound();
  }

  return (
    <section className="w-full mx-auto sm:px-12 px-4 py-8 font-mono">
      <Link
        href="/"
        className="text-blue-500 hover:underline mb-6 inline-block text-base font-semibold"
      >
        &larr; Back to listings
      </Link>

      <section className="w-full flex flex-col justify-start items-start gap-2">
        <section className="w-full md:h-[250px] h-[150px] bg-gradient-to-tl from-indigo-600 to-amber-400 rounded-2xl relative">
          <div className="p-2 bg-white rounded-full w-fit absolute -bottom-6 left-8">
            <div className="md:size-14 size-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
          </div>
        </section>
        <div className="flex flex-col justify-start items-start gap-1 mt-8">
          <h1 className="md:text-3xl text-xl font-bold leading-none">{job.title}</h1>
          <h2 className="md:text-base text-sm text-gray-700 leading-none">
            {job.company}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-2 mt-6 md:text-base text-sm w-full max-w-2xl">
          <div className="">
            <h3 className="font-semibold text-black">Location</h3>
            <p>{job.location}</p>
          </div>
          <div className="">
            <h3 className="font-semibold text-black">Salary</h3>
            <p>{job.salary}</p>
          </div>
          <div className="">
            <h3 className="font-semibold text-gray-700">Posted Date</h3>
            <p>{new Date(job.postedDate).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="font-semibold text-black md:text-2xl text-lg">Job Description</h3>
          <p className="whitespace-pre-line md:text-base text-sm">{job.description}</p>
        </div>

        <div className="mt-8">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer">
            Apply Now
          </button>
        </div>
      </section>
    </section>
  );
}
