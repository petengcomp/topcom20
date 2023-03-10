import axios from "axios"

export const api = axios.create({
  // baseURL:"https://apitopcom.pet.inf.ufes.br/"
  baseURL:"http://localhost:4444/"
})