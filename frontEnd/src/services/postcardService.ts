import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface PostcardData {
    userName: string
    userInitial: string
    location: string
    requestingFromCountry: string
    text: string
    imageUrl?: string
    commentCount: number
}

interface PostCardResponse {
    id: Int8Array
    userName: string
    userInitial: string
    location: string
    requestingFromCountry: string
    text: string
    imageUrl?: string
    commentCount: number
}


export const createPostcard = async(data: PostcardData): Promise<PostCardResponse> =>{
    try{
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

