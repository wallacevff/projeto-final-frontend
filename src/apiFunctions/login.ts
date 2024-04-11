
const login = (username: string, password: string) => {
    var response = fetch("/api/login",
        {
            method: "POST",
            mode: "cors",
            body: JSON.stringify(
                {
                    username: username,
                    password: password
                }
            )
        },
        
    )
}