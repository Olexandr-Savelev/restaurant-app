export interface User {
  isAdmin?: boolean;
  name?: string;
}

export interface UserLoginData {
  name: string;
  password: string;
}
