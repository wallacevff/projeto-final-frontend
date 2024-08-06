import { TipoUsuario } from "./TipoUsuario";

export interface Usuario {
  id: number;
  nome: string;
  imagem: string;
  email: string;
  senha: string;
  imagem: string;
  tipousuario: TipoUsuariosuario;
  navbaritens?: NavbarItem[];
}


export interface UsuarioDto {
  id: number;
  nome: string;
  imagem: string;
  email: string;
  imagem: string;
  tipousuario: TipoUsuariosuario;
  navbaritens?: NavbarItem[];
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
