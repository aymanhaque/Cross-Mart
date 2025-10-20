import { useState, useEffect, useRef } from 'react'
import { FaPlane, FaSearch, FaMapMarkerAlt } from 'react-icons/fa'

const FlyingToRequestingFrom = () => {
  const [flyingToExpanded, setFlyingToExpanded] = useState(false)
  const [requestingFromExpanded, setRequestingFromExpanded] = useState(false)
  const [flyingToLocation, setFlyingToLocation] = useState('')
  const [requestingFromLocation, setRequestingFromLocation] = useState('')
  const [formHeight, setFormHeight] = useState('48px')
  const flyingToFormRef = useRef<HTMLFormElement>(null)
  const requestingFromFormRef = useRef<HTMLFormElement>(null)

  // Measure and set the form height for smooth animation
  useEffect(() => {
    if (flyingToExpanded && flyingToFormRef.current) {
      const height = flyingToFormRef.current.scrollHeight
      setFormHeight(`${height}px`)
    } else if (requestingFromExpanded && requestingFromFormRef.current) {
      const height = requestingFromFormRef.current.scrollHeight
      setFormHeight(`${height}px`)
    } else {
      setFormHeight('48px')
    }
  }, [flyingToExpanded, requestingFromExpanded])

  const handleFlyingToClick = () => {
    if (!flyingToExpanded) {
      setFlyingToExpanded(true)
      setRequestingFromExpanded(false)
      setFlyingToLocation("")
    }
  }

  const handleRequestingFromClick = () => {
    if (!requestingFromExpanded) {
      setRequestingFromExpanded(true)
      setFlyingToExpanded(false)
      setRequestingFromLocation("")
    }
  }

  const handleFlyingToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFlyingToLocation(e.target.value)
  }

  const handleRequestingFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRequestingFromLocation(e.target.value)
  }

  const handleFlyingToSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle flying to submission
    console.log('Flying to location submitted:', flyingToLocation)
    setFlyingToExpanded(false)
  }

  const handleRequestingFromSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle requesting from submission
    console.log('Requesting from location submitted:', requestingFromLocation)
    setRequestingFromExpanded(false)
  }

  return (
    <div className="flex flex-col gap-3">
      {/* Flying To Section */}
      <div 
        className={`relative ${flyingToExpanded ? 'w-96 md:w-112' : 'w-64'} bg-white dark:bg-zinc-800 rounded-3xl border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${flyingToExpanded ? 'shadow-md animate-widthExpand' : ''}`} 
        style={{ height: flyingToExpanded ? formHeight : '48px' }}
      >
        {!flyingToExpanded ? (
          // Collapsed state - show the "Flying to?" button
          <div 
            className="h-12 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200"
            onClick={handleFlyingToClick}
          >
            <div className="flex items-center justify-center w-full px-6 gap-3">
              <FaPlane className="text-neutral-800 dark:text-white" size={16} />
              <span className="text-neutral-800 dark:text-neutral-300 whitespace-nowrap font-medium">Flying to?</span>
            </div>
          </div>
        ) : (
          // Expanded state - show input field with animation
          <form ref={flyingToFormRef} onSubmit={handleFlyingToSubmit} className="p-5 animate-fadeIn animate-expandIn">
            <div className="flex items-center gap-3 mb-3 mx-1 mt-4">
              <FaPlane className="text-neutral-800 dark:text-white flex-shrink-0" size={16} />
              <span className="text-neutral-800 dark:text-neutral-300 font-medium truncate">Enter destination</span>
            </div>
            <div className="flex gap-2 px-1">
              <input
                type="text"
                value={flyingToLocation}
                onChange={handleFlyingToChange}
                placeholder="Where are you flying to?"
                className="w-full px-5 py-2.5 bg-gray-100 dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-full text-neutral-800 dark:text-neutral-300 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                autoFocus
              />
            </div>
            <div className="flex justify-between mt-2 mx-2">
              <button 
                type="button" 
                onClick={() => setFlyingToExpanded(false)}
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

      {/* Requesting From Section */}
      <div 
        className={`relative ${requestingFromExpanded ? 'w-96 md:w-112' : 'w-64'} bg-white dark:bg-zinc-800 rounded-3xl border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${requestingFromExpanded ? 'shadow-md animate-widthExpand' : ''}`} 
        style={{ height: requestingFromExpanded ? formHeight : '48px' }}
      >
        {!requestingFromExpanded ? (
          // Collapsed state - show the "Requesting from?" button
          <div 
            className="h-12 flex items-center cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-700 transition-colors duration-200"
            onClick={handleRequestingFromClick}
          >
            <div className="flex items-center justify-center w-full px-6 gap-3">
              <FaMapMarkerAlt className="text-neutral-800 dark:text-white" size={16} />
              <span className="text-neutral-800 dark:text-neutral-300 whitespace-nowrap font-medium">Requesting from?</span>
            </div>
          </div>
        ) : (
          // Expanded state - show input field with animation
          <form ref={requestingFromFormRef} onSubmit={handleRequestingFromSubmit} className="p-5 animate-fadeIn animate-expandIn">
            <div className="flex items-center gap-3 mb-3 mx-1 mt-4">
              <FaMapMarkerAlt className="text-neutral-800 dark:text-white flex-shrink-0" size={16} />
              <span className="text-neutral-800 dark:text-neutral-300 font-medium truncate">Enter location</span>
            </div>
            <div className="flex gap-2 px-1">
              <input
                type="text"
                value={requestingFromLocation}
                onChange={handleRequestingFromChange}
                placeholder="Where are you requesting from?"
                className="w-full px-5 py-2.5 bg-gray-100 dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-full text-neutral-800 dark:text-neutral-300 placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400"
                autoFocus
              />
            </div>
            <div className="flex justify-between mt-2 mx-2">
              <button 
                type="button" 
                onClick={() => setRequestingFromExpanded(false)}
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
    </div>
  )
}

export default FlyingToRequestingFrom