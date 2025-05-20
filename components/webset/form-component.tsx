import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

type Props = {
  onParse: (data: any) => void
}

const FormComponent: React.FC<Props> = ({ onParse }) => {
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setLoading(true)
    try {
      const res = await fetch('/api/websets/parse', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ input }),
      })

      const data = await res.json()
      onParse(data)
    } catch (err) {
      console.error('Failed to fetch preview', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-7xl mx-auto relative">
      <input
        type="text"
        placeholder="describe what you're looking for..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-5 py-4 pr-12 text-sm bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 rounded-md focus:outline-none focus:ring-0"
      />
      <button
        type="submit"
        disabled={loading || input.trim() === ''}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 disabled:opacity-40"
      >
        <ArrowRight size={16} />
      </button>
    </form>
  )
}

export default FormComponent
