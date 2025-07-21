import { useState } from 'react'
import { FaPlane } from 'react-icons/fa'

const FlyingToFrom = () => {
  const [expandedSection, setExpandedSection] = useState<'flying' | 'requesting' | null>(null)

  const handleFlyingClick = () => {
    setExpandedSection(expandedSection === 'flying' ? null : 'flying')
  }

  const handleRequestingClick = () => {
    setExpandedSection(expandedSection === 'requesting' ? null : 'requesting')
  }

  return (
    <div className="relative w-80 h-12 bg-zinc-800 rounded-full border border-gray-600 overflow-hidden">
      {/* Flying To Section */}
      <div 
        className={`absolute top-0 left-0 h-full flex items-center cursor-pointer transition-all duration-300 ease-in-out bg-zinc-800 hover:bg-zinc-700 ${
          expandedSection === 'flying' 
            ? 'w-full z-10 ' 
            : expandedSection === 'requesting' 
            ? 'w-0 opacity-0' 
            : 'w-1/2'
        }`}
        onClick={handleFlyingClick}
      >
        <div className="flex items-center justify-center w-full px-4 gap-2">
          <FaPlane className="text-white" size={16} />
          <span className="text-neutral-300 whitespace-nowrap">Flying to?</span>
        </div>
      </div>

      {/* Separator */}
      {!expandedSection && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gray-600"></div>
      )}

      {/* Requesting From Section */}
      <div 
        className={`absolute top-0 right-0 h-full flex items-center cursor-pointer transition-all duration-300 ease-in-out bg-zinc-800 hover:bg-zinc-700 ${
          expandedSection === 'requesting' 
            ? 'w-full z-10 ' 
            : expandedSection === 'flying' 
            ? 'w-0 opacity-0' 
            : 'w-1/2'
        }`}
        onClick={handleRequestingClick}
      >
        <div className="flex items-center justify-center w-full px-4">
          <span className="text-neutral-300 whitespace-nowrap">Requesting from</span>
        </div>
      </div>
    </div>
  )
}

export default FlyingToFrom