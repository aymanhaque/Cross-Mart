import axios from 'axios'

interface SignupData {
  name: string
  email: string
  password: string
}

interface SignupResponse {
  id: string
  name: string
  email: string
  password: string
}

export const signupUser = async (data: SignupData): Promise<SignupResponse> => {
  try {
    const response = await axios.post('http://localhost:8081/auth/signup', data)
    return response.data
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Signup failed'
    throw new Error(errorMessage)
  }
}

interface LoginData {
  email: string
  password: string
}

interface LoginResponse {
  id: string
  name: string
  email: string
  password: string
}

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  try {
    const response = await axios.post('http://localhost:8081/auth/login', data)
    return response.data
  } catch (error: any) {
    const errorMessage = error.response?.data?.message || 'Login failed'
    throw new Error(errorMessage)
  }
}

