import { useEffect, useRef, useState } from 'react'

export function useCopy(timeout = 1600) {
  const [copied, setCopied] = useState<string | null>(null)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [])

  async function copy(key: string, text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(key)
      if (timer.current) window.clearTimeout(timer.current)
      timer.current = window.setTimeout(() => {
        setCopied((current) => (current === key ? null : current))
      }, timeout)
    } catch {
      setCopied(null)
    }
  }

  return { copied, copy }
}
