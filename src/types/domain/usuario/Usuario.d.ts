import { TipoUsuario } from "./TipoUsuario";

export interface Usuario {
  id: number;
  nome: string;
  imagem: string;
  email: string;
  senha: string;
  imagem: string;
  TipoUsuario: TipoUsuariosuario;
}

interface UsuarioLogin {
  login: string;
  password: string;
}

enum AuthStatus {
  LOADING,
  SUCCESS,
  ERROR,
  UNAUTHENTICATED
};
