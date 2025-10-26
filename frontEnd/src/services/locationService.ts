import axios from "axios"
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL


export const getCurrentLocation = async() =>{
    try{
        const response = await axios.get("https://ipv4-check-perf.radar.cloudflare.com/api/info")
        return response.data
    }
    catch(error:unknown){
        if(axios.isAxiosError(error)){
            const errorMessage = error.response?.data?.message || "Couldn't get location data"
            throw new Error(errorMessage)
        } else {
            throw new Error('Unexpected error occured')
        }
    }
}

export const updateCurrentLocation = async(id: number, location:string) =>{
    
    try{
        const response = await axios.put(`${API_BASE_URL}/location/update/${id}?location=${location}`)
        return response.data
    }
    catch(error:unknown){
        if(axios.isAxiosError(error)){
            const errorMessage = error.response?.data?.message || "Couldn't update location"
            throw new Error(errorMessage)
        } else {
            throw new Error('Unexpected error occured')
        }
    }
}