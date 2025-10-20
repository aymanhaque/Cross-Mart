import { useState, useEffect, useRef } from 'react'
import { FaPlane, FaSearch } from 'react-icons/fa'

const FlyingTo = () => {
  const [expanded, setExpanded] = useState(false)
  const [location, setLocation] = useState('')
  const [formHeight, setFormHeight] = useState('48px')
  const [formWidth, setFormWidth] = useState('w-64')
  const formRef = useRef<HTMLFormElement>(null)

  // Measure and set the form height for smooth animation
  useEffect(() => {
    if (expanded && formRef.current) {
      const height = formRef.current.scrollHeight
      setFormHeight(`${height}px`)
      setFormWidth('w-96 md:w-112')
    } else {
      setFormHeight('48px')
      setFormWidth('w-64')
    }
  }, [expanded])

  const handleFlyingClick = () => {
    if (!expanded) {
      setExpanded(true)
    }
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the submission of the location
    console.log('Location submitted:', location)
    setExpanded(false)
    // Optionally clear the input after submission
    // setLocation('')
  }

  return (
    <div 
      className={`relative ${formWidth} bg-white dark:bg-zinc-800 rounded-3xl border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${expanded ? 'shadow-md animate-widthExpand' : ''}`} 
      style={{ height: formHeight }}
    >
      {!expanded ? (
        // Collapsed state - show the "Flying to?" button
        <div 
          className="h-12 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200"
          onClick={handleFlyingClick}
        >
          <div className="flex items-center justify-center w-full px-6 gap-3">
            <FaPlane className="text-neutral-800 dark:text-white" size={16} />
            <span className="text-neutral-800 dark:text-neutral-300 whitespace-nowrap font-medium">Flying to?</span>
          </div>
        </div>
      ) : (
        // Expanded state - show input field with animation
        
        <form ref={formRef} onSubmit={handleSubmit} className="p-5 animate-fadeIn animate-expandIn">
          <div className="flex items-center gap-3 mb-3 mx-1 mt-4">
            <FaPlane className="text-neutral-800 dark:text-white flex-shrink-0" size={16} />
            <span className="text-neutral-800 dark:text-neutral-300 font-medium truncate">Enter destination</span>
          </div>
          <div className="flex gap-2 px-1">
            <input
              type="text"
              value={location}
              onChange={handleLocationChange}
              placeholder="Where are you flying to?"
              className="w-full px-5 py-2.5 bg-gray-100 dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-full text-neutral-800 dark:text-neutral-300 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
              autoFocus
            />
          </div>
          <div className="flex justify-between mt-2 mx-2">
            <button 
              type="button" 
              onClick={() => setExpanded(false)}
              className="text-gray-500 dark:text-gray-400 font-medium hover:text-indigo-400 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 py-1.5 rounded-full flex items-center gap-2 transition-all duration-200 transform hover:scale-105"
            >
              <FaSearch size={12} />
              <span>Search</span>
            </button>
          </div>
        </form>

      )}
    </div>
  )
}

export default FlyingTo