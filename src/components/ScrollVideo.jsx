import { useRef, useEffect, useState } from 'react'
import './ScrollVideo.css'

// total number of frames extracted from the video (in /public/frames/)
const FRAME_COUNT = 121

// ScrollVideo - renders a canvas that animates through image frames as the user scrolls.
// the trick: we extracted each frame of the video as a jpg, then we pick which
// frame to draw based on how far the user has scrolled through the container.
// this is way more reliable than trying to scrub a <video> element with currentTime.

function ScrollVideo() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const imagesRef = useRef([])
  const [loaded, setLoaded] = useState(false)

  // first useEffect: preload all the frame images into memory on mount
  useEffect(() => {
    let loadedCount = 0
    const images = []

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image()
      // frames are named frame-001.jpg, frame-002.jpg, etc
      img.src = `/frames/frame-${String(i).padStart(3, '0')}.jpg`
      img.onload = () => {
        loadedCount++
        // once every frame is loaded, store them and flip the loaded flag
        if (loadedCount === FRAME_COUNT) {
          imagesRef.current = images
          setLoaded(true)
        }
      }
      images.push(img)
    }
  }, [])

  // second useEffect: once images are loaded, hook up the scroll listener
  useEffect(() => {
    if (!loaded) return

    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext('2d')
    const images = imagesRef.current

    // match canvas resolution to the actual image size so it looks sharp
    canvas.width = images[0].naturalWidth
    canvas.height = images[0].naturalHeight

    const drawFrame = (index) => {
      ctx.drawImage(images[index], 0, 0)
    }

    const handleScroll = () => {
      const rect = container.getBoundingClientRect()
      // scrollHeight = how many pixels of scrolling the container provides
      const scrollHeight = container.offsetHeight - window.innerHeight
      // progress goes from 0 (top of section) to 1 (scrolled past it)
      const progress = Math.min(Math.max(-rect.top / scrollHeight, 0), 1)
      // map that 0-1 progress to a frame index
      const frameIndex = Math.min(
        Math.floor(progress * (FRAME_COUNT - 1)),
        FRAME_COUNT - 1
      )
      drawFrame(frameIndex)
    }

    drawFrame(0)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loaded])

  return (
    <div className="scroll-video-container" ref={containerRef}>
      <div className="scroll-video-sticky">
        <div className="scroll-video-inner">
          <canvas ref={canvasRef} className="scroll-video" />
        </div>
      </div>
    </div>
  )
}

export default ScrollVideo
