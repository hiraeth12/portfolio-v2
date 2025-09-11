"use client"

import { useEffect, useState } from "react"

interface TypewriterEffectProps {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseTime?: number
  className?: string
}

export default function TypewriterEffect({
  words,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  className = "",
}: TypewriterEffectProps) {
  const [text, setText] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isBlinking, setIsBlinking] = useState(true)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timer = setTimeout(
      () => {
        // Handle typing animation
        if (!isDeleting && text.length < currentWord.length) {
          setText(currentWord.substring(0, text.length + 1))
          setIsBlinking(false)
        }
        // Handle deleting animation
        else if (isDeleting && text.length > 0) {
          setText(currentWord.substring(0, text.length - 1))
          setIsBlinking(false)
        }
        // Pause at the end of typing a word
        else if (!isDeleting && text.length === currentWord.length) {
          setIsBlinking(true)
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
        // Move to the next word
        else if (isDeleting && text.length === 0) {
          setIsDeleting(false)
          setWordIndex((prev) => (prev + 1) % words.length)
          setIsBlinking(true)
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className={`inline-block font-cascadia ${className}`}>
      {text}
      <span className={`inline-block w-1 h-8 ml-1 bg-rose-500 ${isBlinking ? "animate-blink" : ""}`}></span>
    </span>
  )
}
