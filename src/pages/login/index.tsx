import Button from "@/components/Button";
import EstudantesPng from "@/components/EstudantesPng";
import UserLogo from "@/components/UserLogoPng";
import LoginCSS from "@/pages/login/Login.module.css";
import { AppContext } from "@/store";
import { useRouter } from "next/router";
import { CSSProperties, useContext, useState } from "react";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const styleForCriarUsuarioButton: CSSProperties =
    {
        // marginLeft: "10px",
        marginTop: "10px",
        background: "#09870e",
        borderRadius: "10px"
    }
    const state = useContext(AppContext);
    function login() {
        state.setUsername("asd");
        state.setPassword(password);
        console.log(state);
        console.log(username)
        // router.push("/");
    }
    const router = useRouter();
    return <div className={LoginCSS.LoginDiv}>
        <div className={LoginCSS.BlueDiv}>
            <div className={LoginCSS.Estudantes}>
                <EstudantesPng />
            </div>

        </div>


        <div className={LoginCSS.FormArea}>
            <div className={LoginCSS.FormRectangle}>
                <div className={LoginCSS.Image}>
                    <UserLogo style={{

                    } as CSSProperties} />
                </div>
                <div className={LoginCSS.LoginForm}>
                    <label form="username">Usuário</label>
                    <input title="username" value={username} onChange={(e) => setUsername(e.target.value)}></input>
                </div>

                <div className={LoginCSS.LoginForm}>
                    <label form="password">Senha</label>
                    <input title="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <div className={LoginCSS.ButtonGroup}>
                    <Button
                        title="Login"
                        type="button"
                        style={{
                            backgroundColor: "blue",
                            borderRadius: "10px"
                        }}
                        action={() => login()}
                    />
                    <Button
                        title="Criar Usuário"
                        type="button"
                        style={styleForCriarUsuarioButton}
                    />
                </div>

            </div>
        </div>
    </div>

}

export default LoginPage;