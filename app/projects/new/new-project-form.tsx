'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function NewProjectForm() {
  const [name, setName] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError(null)

    const trimmedName = name.trim()
    if (!trimmedName) {
      setError('Please enter a project name.')
      return
    }

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: trimmedName }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))

        if (payload?.error === 'API_KEY_MISSING') {
          setError('Add your V0 API key in the environment configuration to create projects.')
        } else if (payload?.error) {
          setError(payload.error)
        } else {
          setError('Unable to create the project. Please try again.')
        }
        return
      }

      const project = await response.json()
      const projectId = project?.id

      if (!projectId) {
        setError('Project created, but no ID returned. Please refresh and try again.')
        return
      }

      router.replace(`/projects/${projectId}/chats/new`)
    } catch (submissionError) {
      setError('A network error occurred. Please verify your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="text-left">
        <label htmlFor="project-name" className="text-sm font-semibold uppercase tracking-[0.3em] text-[#6f5237]">
          Project name
        </label>
        <input
          id="project-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Ex: Spanish Trail Seller Landing Page"
          className="mt-3 w-full rounded-xl border border-[#d8cdbf] bg-[#fdf9f3] px-4 py-3 text-base text-[#1f2a24] outline-none transition focus:border-[#0f2b1e] focus:ring-2 focus:ring-[#0f2b1e]/20"
          aria-required="true"
        />
      </div>

      {error ? <p className="text-sm text-[#c94242]">{error}</p> : null}

      <button
        type="submit"
        className="w-full rounded-full bg-[#0f2b1e] px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-white transition hover:bg-[#123828]"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Creating…' : 'Create Project'}
      </button>
    </form>
  )
}

