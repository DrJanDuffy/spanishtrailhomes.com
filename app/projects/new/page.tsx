import type { Metadata } from 'next'
import Link from 'next/link'
import { NewProjectForm } from './new-project-form'

export const metadata: Metadata = {
  title: 'Create New Project',
  description:
    'Start a new v0 project session so you can design prompts, generate UI, and iterate on Spanish Trail Homes experiences.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NewProjectPage() {
  return (
    <div className="min-h-dvh bg-[#f8f2e7] px-6 py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border border-[#d8cdbf] bg-white p-8 shadow-lg shadow-primary/10">
        <div className="space-y-4 text-center">
          <h1 className="font-[var(--font-playfair)] text-3xl text-[#1f2a24] sm:text-4xl">
            Create a New v0 Project
          </h1>
          <p className="text-base leading-relaxed text-[#372a20]/85">
            Name your project to launch a dedicated workspace. After creation you&apos;ll be guided to start a chat so you
            can design or iterate on marketing pages in minutes.
          </p>
        </div>
        <div className="mt-10">
          <NewProjectForm />
        </div>
        <p className="mt-8 text-sm text-[#372a20]/70">
          Already collaborating on a project?{' '}
          <Link href="/" className="underline-offset-4 hover:underline text-[#0f2b1e]">
            Return to the dashboard
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

