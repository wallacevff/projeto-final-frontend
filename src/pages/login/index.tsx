import Button from "@/components/Button";
import LoginCSS from "@/pages/login/Login.module.css";
import { AppContext } from "@/store";
import { useRouter } from "next/router";
import { CSSProperties, useContext, useState } from "react";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const styleForCriarUsuarioButton: CSSProperties =
    {
        marginLeft: "10px",
        background: "red"
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
        <div className={LoginCSS.FormArea}>
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
                    style={{ backgroundColor: "blue" }}
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
}

export default LoginPage;