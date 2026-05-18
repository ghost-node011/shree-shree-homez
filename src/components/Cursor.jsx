import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef   = useRef(null)
  const ringRef  = useRef(null)
  const mouse    = useRef({ x: 0, y: 0 })
  const ring     = useRef({ x: 0, y: 0 })
  const rafRef   = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const rng  = ringRef.current
    if (!dot || !rng) return

    const onMove = (e) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
    }

    const loop = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.1
      ring.current.y += (mouse.current.y - ring.current.y) * 0.1
      rng.style.transform = `translate(${ring.current.x - 22}px, ${ring.current.y - 22}px)`
      rafRef.current = requestAnimationFrame(loop)
    }

    const grow = () => {
      rng.style.width  = '52px'
      rng.style.height = '52px'
      rng.style.borderColor = 'rgba(201,168,76,0.9)'
    }
    const shrink = () => {
      rng.style.width  = '44px'
      rng.style.height = '44px'
      rng.style.borderColor = 'rgba(201,168,76,0.45)'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: 8, height: 8,
        borderRadius: '50%',
        background: '#C9A84C',
        pointerEvents: 'none',
        zIndex: 99999,
        transition: 'transform 0.04s linear',
        willChange: 'transform',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: 44, height: 44,
        borderRadius: '50%',
        border: '1px solid rgba(201,168,76,0.45)',
        pointerEvents: 'none',
        zIndex: 99998,
        transition: 'width 0.3s ease, height 0.3s ease, border-color 0.3s ease',
        willChange: 'transform',
      }} />
    </>
  )
}
