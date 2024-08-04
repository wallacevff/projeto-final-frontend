import { TipoUsuario } from "./TipoUsuario";

export interface User {
  id: number;
  nome: string;
  imagem: string;
  email: string;
  senha: string;
  imagem: string;
  TipoUsuario: TipoUsuariosuario;
}

interface UserLogin {
  login: string;
  password: string;
}

enum AuthStatus {
  LOADING,
  SUCCESS,
  ERROR,
  UNAUTHENTICATED
};
