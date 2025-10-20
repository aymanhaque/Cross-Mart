import { useState } from 'react'
import { Field, FieldLabel, FieldGroup, FieldContent, FieldDescription } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAppSelector } from '@/store/hooks'
import { createPostcard } from '@/services/postcardService'
import { FaTimes } from 'react-icons/fa'

interface PostcardSubmissionProps {
  isOpen: boolean
  onClose: () => void
}

const PostcardSubmission = ({ isOpen, onClose }: PostcardSubmissionProps) => {
  const [text, setText] = useState('')
  const [location, setLocation] = useState('')
  const [imageURL, setImageURL] = useState('') // Changed from imageUrl to imageURL
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  
  // Get user info from Redux store
  const { user } = useAppSelector((state) => state.auth)
  
  if (!isOpen) return null

  // Generate user initials from name (first letter of each name part)
  const generateUserInitials = (name?: string): string => {
    if (!name) return 'U' // Default initial if name is not available
    
    return name
      .split(' ')
      .map(part => part.charAt(0).toUpperCase())
      .join('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!user) {
      setError('You must be logged in to create a postcard')
      return
    }

    if (!text || !location) {
      setError('Please fill out all required fields')
      return
    }

    try {
      setIsSubmitting(true)
      setError('')
      
      // Default image URL to use when user doesn't provide one
      const defaultImageURL = "https://placehold.co/600x400/gray/white?text=No+Image+Provided"
      
      const postcard = {
        userName: user.name || user.email,
        userInitial: generateUserInitials(user.name),
        location,
        requestingFromCountry: location,
        text,
        imageURL: imageURL || defaultImageURL, // Use default if imageURL is empty
        commentCount: 0,
        userId: user.id // Add the userId to the postcard object
      }
      
      await createPostcard(postcard)
      
      // Clear form and close modal on success
      setText('')
      setLocation('')
      setImageURL('')
      onClose()
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create postcard')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 flex items-start justify-end pt-16 sm:pt-20 mr-3 sm:mr-10">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-white dark:bg-zinc-800 w-full max-w-md rounded-lg p-6 relative z-10 shadow-xl animate-fadeIn mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Create New Post</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
            <FaTimes />
          </Button>
        </div>
        
        {error && (
          <div className="bg-red-100 dark:bg-red-900/30 border border-red-400 text-red-700 dark:text-red-300 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Field>
              <FieldLabel htmlFor="text">Message</FieldLabel>
              <FieldContent>
                <textarea
                  id="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="What are you looking for?"
                  className="w-full px-3 py-2 bg-gray-100 dark:bg-zinc-700 border border-gray-300 dark:border-gray-600 rounded-md text-neutral-900 dark:text-neutral-100 placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 min-h-24"
                  required
                />
                <FieldDescription>Share what you're looking for or requesting</FieldDescription>
              </FieldContent>
            </Field>
            
            <Field>
              <FieldLabel htmlFor="location">Location</FieldLabel>
              <FieldContent>
                <Input 
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g., Tokyo, Japan"
                  required
                />
                <FieldDescription>Where you're requesting items from</FieldDescription>
              </FieldContent>
            </Field>
            
            <Field>
              <FieldLabel htmlFor="imageURL">Image URL (Optional)</FieldLabel>
              <FieldContent>
                <Input 
                  id="imageURL"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
                <FieldDescription>Add an image to your post (paste URL)</FieldDescription>
              </FieldContent>
            </Field>
            
            <div className="flex justify-end gap-3 mt-4">
              <Button 
                variant="outline" 
                type="button" 
                onClick={onClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Posting...' : 'Post'}
              </Button>
            </div>
          </FieldGroup>
        </form>
      </div>
    </div>
  )
}

export default PostcardSubmission