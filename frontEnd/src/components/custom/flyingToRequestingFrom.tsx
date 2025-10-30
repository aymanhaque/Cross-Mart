import { useState, useRef } from 'react'
import { FaPlane, FaMapMarkerAlt } from 'react-icons/fa'

const FlyingToRequestingFrom = () => {
  const [flyingToExpanded, setFlyingToExpanded] = useState(false)
  const [requestingFromExpanded, setRequestingFromExpanded] = useState(false)
  const [flyingToLocation, setFlyingToLocation] = useState('')
  const [requestingFromLocation, setRequestingFromLocation] = useState('')
  const flyingToInputRef = useRef<HTMLInputElement>(null)
  const requestingFromInputRef = useRef<HTMLInputElement>(null)

  const isExpanded = flyingToExpanded || requestingFromExpanded

  const handleFlyingToClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!flyingToExpanded) {
      setFlyingToExpanded(true)
      setRequestingFromExpanded(false)
      setFlyingToLocation("")
      setTimeout(() => flyingToInputRef.current?.focus(), 100)
    } else {
      setFlyingToExpanded(false)
    }
  }

  const handleRequestingFromClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!requestingFromExpanded) {
      setRequestingFromExpanded(true)
      setFlyingToExpanded(false)
      setRequestingFromLocation("")
      setTimeout(() => requestingFromInputRef.current?.focus(), 100)
    } else {
      setRequestingFromExpanded(false)
    }
  }

  const handleFlyingToKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      console.log('Flying to location submitted:', flyingToLocation)
      setFlyingToExpanded(false)
    }
  }

  const handleRequestingFromKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      console.log('Requesting from location submitted:', requestingFromLocation)
      setRequestingFromExpanded(false)
    }
  }

  const handleContainerClick = () => {
    // Close any expanded state when clicking on the container (but not on buttons/inputs)
    if (flyingToExpanded) setFlyingToExpanded(false)
    if (requestingFromExpanded) setRequestingFromExpanded(false)
  }

  return (
    <div 
      className={`relative h-12 bg-white dark:bg-zinc-800 rounded-3xl border border-gray-300 dark:border-gray-600 overflow-hidden transition-all duration-300 ease-in-out ${isExpanded ? 'shadow-md' : ''}`}
      onClick={handleContainerClick}
    >
      <div className="h-full flex items-center">
        {/* Flying To Button/Input */}
        <div 
          className={`h-full flex items-center px-6 gap-3 cursor-pointer ${!isExpanded || flyingToExpanded ? 'flex-1 px-12' : ''}  transition-all duration-300`}
          onClick={handleFlyingToClick}
        >
          <FaPlane className="text-neutral-800 dark:text-white flex-shrink-0" size={16} />
          {!flyingToExpanded ? (
            <span className={`text-neutral-800 dark:text-neutral-300 whitespace-nowrap font-medium ${requestingFromExpanded ? 'opacity-0 w-0 px-0' : ''}`}>Flying to?</span>
          ) : (
            <input
              ref={flyingToInputRef}
              type="text"
              value={flyingToLocation}
              onChange={(e) => setFlyingToLocation(e.target.value)}
              onKeyDown={handleFlyingToKeyDown}
              onClick={(e) => e.stopPropagation()}
              placeholder="Enter destination..."
              className="bg-transparent text-neutral-800 dark:text-neutral-300 placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          )}
        </div>

        {/* Divider - only show when not expanded */}
        {!isExpanded && (
          <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
        )}

        {/* Requesting From Button/Input */}
        <div 
          className={`h-full flex items-center px-6 gap-3 cursor-pointer ${!isExpanded || requestingFromExpanded ? 'flex-1' : ''} ${flyingToExpanded ? 'w-0 px-0' : ''} transition-all duration-300`}
          onClick={handleRequestingFromClick}
        >
          <FaMapMarkerAlt className="text-neutral-800 dark:text-white flex-shrink-0" size={16} />
          {!requestingFromExpanded ? (
            <span className="text-neutral-800 dark:text-neutral-300 whitespace-nowrap font-medium">Requesting from?</span>
          ) : (
            <input
              ref={requestingFromInputRef}
              type="text"
              value={requestingFromLocation}
              onChange={(e) => setRequestingFromLocation(e.target.value)}
              onKeyDown={handleRequestingFromKeyDown}
              onClick={(e) => e.stopPropagation()}
              placeholder="Enter location..."
              className="w-full bg-transparent text-neutral-800 dark:text-neutral-300 placeholder-gray-400 dark:placeholder-gray-500 outline-none"
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default FlyingToRequestingFrom