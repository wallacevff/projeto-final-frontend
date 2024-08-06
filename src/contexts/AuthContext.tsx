// context/AuthContext.tsx
import UsuarioService from "@/services/UsuarioService";
import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";
import { decodeToken } from "@/utils/jwt";
import map from "@/utils/mapper";
import router from "next/router";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  user: Usuario | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null | undefined>("");
  const [userDto, setUserDto] = useState<UsuarioDto | null>(null)
  function UpdateUser(tok :string | null, udto: UsuarioDto | null): void  {
    setLoading(true);
    setToken(token);
    setUserDto(udto);
    let u = map.TO<Usuario>(udto) as Usuario;
    setUser(u);
    setLoading(false);
  }
  useEffect(() => {
    const auth = async () => {
      const tk = localStorage.getItem('token');
      if (tk) {
        // setUserDto(decodeToken(tk as string));
        
        const udto = await UsuarioService.getUsuarioByToken(tk as string);
        UpdateUser(tk, udto);
        // console.log(`User authenticated: ${userDto?.nome}`);
        
      }
      setLoading(false);
    }
    auth().then();
  }, []);

  const login = async(username: string, password: string): Promise<boolean> => {
      
      let token = await UsuarioService.getUsuarioLogin(username, password);
      
      // console.log(`User authenticated: ${token}`);
      if (!token) {
        // console.log('Invalid credentials');
        return false;
      }
      let uDto = await UsuarioService.getUsuarioByToken(token);
      // let us = map.TO<Usuario>(uDto);
      UpdateUser(token, uDto);
      localStorage.setItem('token', token);
      router.push('/');
      return true;
  };

  const logout = () => {
    localStorage.removeItem('token');
    // console.log('User deleted');
    UpdateUser(null, null);
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
