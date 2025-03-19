"use client"
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JobForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    description: '',
    location: '',
    salary: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // In a real app, this would save data to a database
    alert('Job posted successfully!');
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl flex flex-col justify-start items-start gap-4 mx-auto">
      <div className='w-full flex flex-col justify-start items-start gap-2'>
        <label htmlFor="title" className="text-base font-semibold">Job Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded text-base outline-none"
          placeholder='enter your title..'
        />
      </div>
      
      <div className='w-full flex flex-col justify-start items-start gap-2'>
        <label htmlFor="company" className="text-base font-semibold">Company</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded outline-none"
           placeholder='enter your country..'
        />
      </div>
      
      <div className='w-full flex flex-col justify-start items-start gap-2'>
        <label htmlFor="description" className="text-base font-semibold">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          rows={4}
          className="w-full p-2 border border-gray-300 rounded resize-none h-[100px] outline-none"
        />
      </div>
      
      <div className='w-full flex flex-col justify-start items-start gap-2'>
        <label htmlFor="location" className="text-base font-semibold">Location</label>
        <input
          type="text"
          id="location"
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded outline-none"
        />
      </div>
      
      <div className='w-full flex flex-col justify-start items-start gap-2'>
        <label htmlFor="salary" className="text-base font-semibold">Salary Range</label>
        <input
          type="text"
          id="salary"
          name="salary"
          value={formData.salary}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded outline-none"
        />
      </div>
      
      <div className="pt-4">
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Submit Job Listing
        </button>
      </div>
    </form>
  );
}