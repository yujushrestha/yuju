"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [bars, setBars] = useState([4, 8, 12, 16])
  const ctxRef = useRef<AudioContext | null>(null)
  const gainRef = useRef<GainNode | null>(null)
  const animRef = useRef<number>(0)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setMounted(true)
    return () => stop()
  }, [])

  const start = () => {
    const ctx = new AudioContext()
    ctxRef.current = ctx

    const master = ctx.createGain()
    master.gain.setValueAtTime(0, ctx.currentTime)
    master.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 4)
    gainRef.current = master
    master.connect(ctx.destination)

    // warm pad — low sine layers with slow LFO movement
    const layers = [
      { freq: 110, gain: 0.5 },
      { freq: 138.5, gain: 0.3 },
      { freq: 164.8, gain: 0.2 },
      { freq: 220, gain: 0.12 },
    ]

    layers.forEach(({ freq, gain }, i) => {
      const osc = ctx.createOscillator()
      const g = ctx.createGain()
      const lfo = ctx.createOscillator()
      const lfoG = ctx.createGain()

      osc.type = "sine"
      osc.frequency.value = freq

      // very slow wobble per layer
      lfo.frequency.value = 0.05 + i * 0.02
      lfoG.gain.value = freq * 0.004
      lfo.connect(lfoG)
      lfoG.connect(osc.frequency)

      g.gain.value = gain
      osc.connect(g)
      g.connect(master)

      osc.start()
      lfo.start()
    })

    // subtle high shimmer
    const shimmer = ctx.createOscillator()
    const shimmerG = ctx.createGain()
    shimmer.type = "sine"
    shimmer.frequency.value = 880
    shimmerG.gain.value = 0.015
    shimmer.connect(shimmerG)
    shimmerG.connect(master)
    shimmer.start()

    // animate bars
    intervalRef.current = setInterval(() => {
      setBars([
        4 + Math.random() * 6,
        8 + Math.random() * 10,
        12 + Math.random() * 14,
        16 + Math.random() * 8,
      ])
    }, 150)
  }

  const stop = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    cancelAnimationFrame(animRef.current)
    if (gainRef.current && ctxRef.current) {
      gainRef.current.gain.linearRampToValueAtTime(
        0,
        ctxRef.current.currentTime + 2
      )
      setTimeout(() => {
        ctxRef.current?.close()
        ctxRef.current = null
      }, 2100)
    }
    setBars([4, 8, 12, 16])
  }

  const toggle = () => {
    if (playing) {
      stop()
      setPlaying(false)
    } else {
      start()
      setPlaying(true)
    }
  }

  if (!mounted) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 2.5 }}
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 100,
      }}
    >
      <button
        onClick={toggle}
        title={playing ? "stop" : "play ambient"}
        style={{
          background: "none",
          border: "none",
          cursor: "none",
          display: "flex",
          alignItems: "flex-end",
          gap: "3px",
          padding: "0.5rem",
        }}
      >
        {bars.map((h, i) => (
          <motion.div
            key={i}
            animate={{ height: h }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            style={{
              width: "3px",
              background: "var(--terminal-green)",
              opacity: playing ? 0.85 : 0.3,
              borderRadius: "1px",
              minHeight: "3px",
            }}
          />
        ))}
      </button>
    </motion.div>
  )
}