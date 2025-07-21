import { FaComment, FaShare } from 'react-icons/fa'

interface PostcardProps {
  userName: string
  userInitial: string
  location: string
  requestingFromCountry: string
  text: string
  imageUrl?: string
  commentCount: number
}

const Postcard = ({ 
  userName, 
  userInitial, 
  location, 
  requestingFromCountry, 
  text, 
  imageUrl, 
  commentCount 
}: PostcardProps) => {
  return (
    <div className="w-150 bg-zinc-800 rounded-lg border border-gray-600 overflow-hidden">
      {/* User Profile Section */}
      <div className="p-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-10 h-10 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">{userInitial}</span>
          </div>
          <div>
            <h3 className="text-neutral-300 font-medium">{userName}</h3>
            <p className="text-gray-400 text-sm">{location} | Requesting from {requestingFromCountry}</p>
          </div>
        </div>
        <p className="text-neutral-300 text-sm mb-3">
          {text}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full h-48 bg-gray-700 flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt="Post image" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400">Image placeholder</span>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex justify-between items-center">
        <button className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors duration-300">
          <FaComment size={16} />
          <span className="text-sm">{commentCount} comments</span>
        </button>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-indigo-400 transition-colors duration-300">
          <FaShare size={16} />
          <span className="text-sm">Share</span>
        </button>
      </div>
    </div>
  )
}

export default Postcard