import { Photo } from "./photo"

export interface Member {
    userName: string
    id: number
    photoUrl: string
    age: number
    knownAs: string
    created: string
    lastActive: string
    gender: string 
    introduction: string
    lookingFor: string
    interest: any
    city: string
    country: string
    photos: Photo[]
  }
  
