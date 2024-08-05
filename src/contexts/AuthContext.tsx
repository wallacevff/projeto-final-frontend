// context/AuthContext.tsx
import UsuarioService from "@/services/UsuarioService";
import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";
import { decodeToken, generateToken } from "@/utils/jwt";
import map from "@/utils/mapper";
import router from "next/router";
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type AuthContextType = {
  user: Usuario | null;
  login: (username: string, password: string) => boolean;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Usuario | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [token, setToken] = useState<string | null | undefined>("");
  const [userDto, setUserDto] = useState<UsuarioDto | null>(null)

  useEffect(() => {
    setToken(localStorage.getItem('token'));
    console.log(token);
    if (token && token !== "") {
      UsuarioService.getUsuarioByToken(token).then(dto => setUserDto(dto));
      if(userDto === null || userDto === undefined)
        router.push("/login");
      setUser(map.TO<Usuario>(userDto));
      setLoading(false);
      return;
    }
    setLoading(false);
    router.push("/login");
  }, []);

  const login = (username: string, password: string): boolean  => {
    if (username && password) {
      UsuarioService.getUsuarioLogin(username, password)
        .then((token) => {
          if (token) {
            setToken(token);
            console.log(token);
            localStorage.setItem('token', token);
            console.log(`localstorage: ${localStorage.getItem('token')}`);
            return UsuarioService.getUsuarioByToken(token);
            
          } else {
            throw new Error('Invalid token');
          }
        })
        .then((userDto) => {
          setUserDto(userDto);
          const user = map.TO<Usuario>(userDto);
          setUser(user);
          localStorage.setItem('token', token as string);
          router.push('/');
          return true;
        })
        .catch((error) => {
          console.error('Login failed:', error);
          return false;
        });
    } else {
      return false;
    }
    return false;
  };

  const logout = () => {
    localStorage.removeItem('token');
    console.log('User deleted');
    setUser(null);
    setUserDto(null);
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
