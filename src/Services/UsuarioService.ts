import { Usuario } from "@/types/domain/usuario/Usuario";
import axios from "axios";

// Mock data

export default {
   async getUsuarioLogin(usuario: string, senha: string) : Promise<Usuario> {
        return (await axios.post('/api/usuario/getUsuarioLogin', {login: usuario, password : senha})).data;
    },
};