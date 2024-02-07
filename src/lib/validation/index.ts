import { z } from "zod"

export const SignupValidation = z.object({
    name: z.string().min(2, {message:'Muito pequeno'}),
    username: z.string().min(2, {message:'Muito pequeno'}),
    email: z.string().email(),
    password: z.string().min(8, {message:'A senha deve ter ao menos 8 caracteres'}),
  })