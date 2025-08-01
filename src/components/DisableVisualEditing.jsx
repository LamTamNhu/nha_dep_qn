'use client'

import { useEffect, useState } from 'react'

export default function DisableVisualEditing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if we're in draft mode (visual editing is active)
    const isDraftMode = document.cookie.includes('__prerender_bypass')
    setIsVisible(isDraftMode)
  }, [])

  const handleDisable = () => {
    // Redirect to disable draft mode
    window.location.href = '/api/draft-mode/disable?redirect=' + encodeURIComponent(window.location.pathname)
  }

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleDisable}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md shadow-lg text-sm font-medium transition-colors"
        title="Disable Visual Editing"
      >
        Exit Visual Editing
      </button>
    </div>
  )
}