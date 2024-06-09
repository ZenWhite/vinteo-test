/*
  Класс сильно перегружен большим количеством полей, которые можно заменить на один объект с данными о пользователе.
*/

type UserDTO = {
  name: string
  age: number
  address: string
  phoneNumber: string
  email: string
  role: string
  isActive: boolean
  isVerified: boolean
  isPremium: boolean
  lastLogin: Date
  registrationDate: Date
  profilePicture: string
  bio: string
  interests: string[]
}

class User {
  constructor(private data: UserDTO) {}

  // ... (other methods)
}
