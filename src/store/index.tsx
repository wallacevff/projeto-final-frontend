import React, { useState } from "react";

interface user {
    username: string,
    password: string,
    setUsername?: (t: string) => void,
    setPassword?: (n: string) => void
}

type UserContext = {
    username: string,
    password: string,
    setUsername: (username: string) => void,
    setPassword: (password: string) => void,
}

const initialState: user = {
    username: "a",
    password: "a",
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
            setUsername: (t: string) => updateState('username', t),
            setPassword: (n: string) => updateState('password', n)
        }}>
            {
                props.children && props.children.lenght
                    ? props.children.map(
                        (child: any, i: any) =>
                            React.cloneElement(child, { key: i, ...props })

                    )
                    :
                    React.cloneElement(props.children, { ...props })
            }
        </AppContext.Provider>
    );

}

export default Store;