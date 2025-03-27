import { User } from "./user.model";

// src/app/models/login-response.model.ts
export interface LoginResponse {
  user: User;    // Informações do usuário
  token: string; // Token JWT retornado pela API
}
