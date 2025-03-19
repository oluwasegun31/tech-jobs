# Job Listings App

A simple job listings application built with Next.js, TypeScript, and Tailwind CSS.

## Features

- View list of job postings
- View detailed job information
- Search functionality
- Pagination with "Load More" button
- Post new job listings (frontend only)

## Getting Started

### Prerequisites

- Node.js 16.8 or later

### Installation

1. Clone the repository or unzip the project files

```bash
git clone https://github.com/oluwasegun31/tech-job.git
cd tech-job
```

2. Install dependencies

```bash
npm install
```

3. Run the development server

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## Project Structure

- `src/app/page.tsx` - Home page showing job listings
- `src/app/job/[id]/page.tsx` - Individual job details page
- `src/app/post-job/page.tsx` - Form to create new job listings
- `src/components/` - Reusable components
- `src/data/jobs.ts` - Sample job data

## Building for Production

```bash
npm run build
```

Then start the production server:

```bash
npm start
```
