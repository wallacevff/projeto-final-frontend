import NavbarItens from "@/data/NavbarItens";
import { Usuario, UsuarioDto } from "@/types/domain/usuario/Usuario";

export default class map {

    static TO = <T>(usuario: any) => {
        return {
            id: usuario?.id,
            nome: usuario?.nome,
            tipousuario: usuario?.tipousuario,
            email: usuario?.email,
            imagem: usuario?.imagem,
            navbaritens : usuario?.navbaritens
        } as T
    }

}