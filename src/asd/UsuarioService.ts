import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";
import axios from "axios";

// Mock data
interface LoginParams {
    login: string;
    password: string;
  }
export default {
   async getUsuarioLogin(usuario: string, senha: string) : Promise<string | null> {

        return (await axios.post('/api/usuario/getUsuarioLogin', 
            {
                login: usuario,
                password : senha
            } as LoginParams)).data;
    },
    async getUsuarioByToken(token: string) : Promise<UsuarioDto> {
        return (await axios.get(`/api/usuario/${token}`)).data;
    }
};