import JobForm from '@/components/jobForm';
import Link from 'next/link';

export default function PostJob() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4 mx-auto md:px-12 px-4 py-8 font-mono">
      <Link href="/" className="text-blue-500 hover:underline mb-6 inline-block text-base font-semibold">
        &larr; Back to listings
      </Link>
      
      <section className="w-full md:h-[250px] h-[150px] bg-gradient-to-tl from-indigo-600 to-amber-400 rounded-2xl relative">
          <div className="p-2 bg-white rounded-full w-fit absolute -bottom-6 right-8">
            <div className="md:size-14 size-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500" />
          </div>
        </section>
      <h1 className="md:text-3xl text-xl font-bold mt-5">Post a New Job</h1>
      <JobForm />
    </div>
  );
}