import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";

export default class map {

    static TO = <T>(usuario: any) => {
        return {
            id: usuario?.id,
            nome: usuario?.nome,
            tipoUsuario: usuario?.TipoUsuario,
            email: usuario?.email,
            imagem: usuario?.imagem
        } as T
    }

}