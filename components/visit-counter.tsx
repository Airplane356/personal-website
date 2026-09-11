'use client'

import { useEffect, useState } from 'react'

export function VisitCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('https://abacus.jasoncameron.dev/hit/ericzxchen-com/visits')
      .then((res) => res.json())
      .then((data) => setCount(data.value))
      .catch(() => {})
  }, [])

  if (count === null) return null

  return <p className="text-sm text-muted-foreground">site visits: {count.toLocaleString()}</p>
}
