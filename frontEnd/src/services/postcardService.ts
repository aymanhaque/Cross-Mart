import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface PostcardData {
    userName: string
    userInitial: string
    location: string
    requestingFromCountry: string
    text: string
    imageURL: string // Changed to match backend naming
    commentCount: number
    userId?: string // Add userId as an optional property
}

interface PostCardResponse {
    id: number
    userName: string
    userInitial: string
    location: string
    requestingFromCountry: string
    text: string
    imageURL: string // Changed to match backend naming
    commentCount: number
}


export const createPostcard = async(data: PostcardData): Promise<PostCardResponse> =>{
    try{
        // Field names are now consistent with backend
        const response = await axios.post(`${API_BASE_URL}/postcard/createPostcard`, data)
        return response.data
    }
    catch (error: unknown){
        if(axios.isAxiosError(error)){
            const errorMessage = error.response?.data?.message || "Couldn't create Postcard"
            throw new Error(errorMessage)
        } else {
            throw new Error('Unexpected error occured')
        }
    }
}

export const getAllPostcardsExceptMine = async(id: number): Promise<PostCardResponse[]> =>{
    try{
        const response = await axios.get(`${API_BASE_URL}/postcard/getAllPostcardsExcept/${id}`)
        return response.data
    }
    catch (error: unknown){
        if(axios.isAxiosError(error)){
            const errorMessage = error.response?.data?.message || "Couldn't get Postcards"
            throw new Error(errorMessage)
        } else {
            throw new Error('Unexpected error occured')
        }
    }
}

