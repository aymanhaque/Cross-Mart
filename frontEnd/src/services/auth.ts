import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

interface SignupData {
  email: string
  name: string
  password: string
  location: string
}

interface SignupResponse {
  id: string
  email: string
  name: string
  token: string
  password: string
  location: string
}

export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/signup`, data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || 'Signup failed'
      throw new Error(errorMessage)
    } else {
      throw new Error('Unexpected error occurred')
    }
  }
}

interface LoginData {
  email: string
  password: string
}

interface LoginResponse {
  id: string
  email: string
  name: string
  token: string
  location: string
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, data)
    return response.data
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || 'Login failed'
      throw new Error(errorMessage)
    } else {
      throw new Error('Unexpected error occurred')
    }
  }
}
