import React, { useState } from "react";

type user = {
    username: string,
    password: string,
}

type UserContext = {
    username: string,
    password: string,
    setUsername: (name: string) => void,
    setPassword: (password: string) => void,
}

const initialState: user = {
    username: "",
    password: "",
}

export const AppContext = React.createContext(initialState as UserContext);

const Store = (props: any) => {
    const [state, setState] = useState(initialState);
    function updateState(key: string, value: string) {
        setState({
            ...state,
            [key]: value
        });
    }

    return (
        <AppContext.Provider value={{
            username: state.username,
            password: state.password,
            setPassword: (n: string) => updateState('password', n),
            setUsername: (t: string) => updateState('username', t)
        } as UserContext}>
            {
                props.children && props.children.lenght
                    ? props.children.map(
                        (child : any, i : any) =>
                            React.cloneElement(child, { key: i, ...props })

                    )
                    :
                    React.cloneElement(props.children, { ...props })
            }
        </AppContext.Provider>
    );

}

export default Store;