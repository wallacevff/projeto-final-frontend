import Button from "@/components/Button";
import EstudantesPng from "@/components/EstudantesPng";
import Logo from "@/components/Logo";
import UserLogo from "@/components/UserLogoPng";
import { useAuth } from "@/contexts/AuthContext";
import LoginCSS from "@/pages/login/Login.module.css";
import { useRouter } from "next/router";
import { CSSProperties, useContext, useState } from "react";
const LoginPage = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState('');
    const styleForCriarUsuarioButton: CSSProperties =
    {
        // marginLeft: "10px",
        marginTop: "10px",
        // background: "#09870e",
        color:"#0071BD",
        borderRadius: "6px",
        padding: "4px",
        fontSize: "10cap",
        textDecoration: "underline"
    }
    async function  loginAction() {
        if (login(username, password)) {
            router.push('/');
          } else {
            setError('Usuário ou senha incorretos');
          }
    }
    const router = useRouter();
    return <div className={LoginCSS.LoginDiv}>
        <Logo className={LoginCSS.LogoSmallScreen}/>
        <div className={LoginCSS.BlueDiv}>
            <div className={LoginCSS.Logo}>
                <Logo />
            </div>
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
                {error && <p style={{color:"red"}}>{error}</p>}
                <div className={LoginCSS.ButtonGroup}>
                    <Button
                        title="Login"
                        type="button"
                        style={{
                            backgroundColor: "#0071BD",
                            borderRadius: "6px",
                            padding: "4px",
                            fontSize: "10cap"
                        }}
                        action={() => loginAction()}
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