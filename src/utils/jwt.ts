// utils/jwt.ts

import { UsuarioDto } from '@/types/domain/usuario/Usuario'
import jwt from 'jsonwebtoken'

const SECRET_KEY = 'Abc242526'

interface JwtPayload {
  usuario: UsuarioDto
}

// Função para gerar o token JWT
export const generateToken = (usuario: UsuarioDto): string => {
   const token  = jwt.sign({ usuario } as object, SECRET_KEY, { expiresIn: '1h' });
   return token;
}

// Função para verificar o token JWT
export const verifyToken = (token: string): JwtPayload | null => {
  try {
    return jwt.verify(token, SECRET_KEY) as JwtPayload
  } catch (error) {
    return null
  }
}

// Função para decodificar o token JWT sem verificar a assinatura
export const decodeToken = (token: string): UsuarioDto | null => {
  try {
    const decoded = jwt.decode(token) as JwtPayload
    return decoded ? decoded.usuario : null
  } catch (error) {
    console.error('Failed to decode token:', error)
    return null
  }
}
