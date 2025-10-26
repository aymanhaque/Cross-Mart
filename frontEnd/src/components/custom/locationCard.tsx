import { useState, useEffect } from 'react'
import { Field, FieldLabel, FieldContent } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { updateUserLocation } from '@/store/slices/authSlice'
import { FaTimes } from 'react-icons/fa'
import { updateCurrentLocation } from '@/services/locationService'

interface LocationCardProps {
  isOpen: boolean
  onClose: () => void
}

const LocationCard = ({ isOpen, onClose }: LocationCardProps) => {
  const { user } = useAppSelector((state) => state.auth)
  const dispatch = useAppDispatch()
  const [location, setLocation] = useState('')

  // Initialize location from user data
  useEffect(() => {
    if (user?.location) {
      setLocation(user.location)
    }
  }, [user?.location])

  if (!isOpen) return null

  const handleSave = async () => {
    if (!user?.id) return
    
    try {
      // Update location in backend
      await updateCurrentLocation(parseInt(user.id), location)
      
      // Update Redux store
      dispatch(updateUserLocation(location))
      
      console.log('Location saved successfully:', location)
      onClose()
    } catch (error) {
      console.error('Failed to update location:', error)
    }
  }

  return (
    <div className="fixed inset-0 flex items-start justify-end pt-16 sm:pt-20 mr-3 sm:mr-10 z-50">
      <div className="absolute inset-0" onClick={onClose}></div>
      <div className="bg-white dark:bg-zinc-800 w-full max-w-md rounded-lg p-6 relative z-10 shadow-xl animate-fadeIn mt-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">Update Location</h2>
          <Button variant="ghost" size="icon" onClick={onClose} className="text-neutral-500 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-200">
            <FaTimes />
          </Button>
        </div>
        
        <div className="space-y-4">
          <Field>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <FieldContent>
              <Input 
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Tokyo, Japan"
              />
            </FieldContent>
          </Field>
          
          <div className="flex justify-end gap-3 mt-4">
            <Button 
              variant="outline" 
              type="button" 
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button 
              type="button"
              onClick={handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationCard