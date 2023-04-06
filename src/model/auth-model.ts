export interface User {
    id:         number,
    username:   string,
    password:   string
}

export interface Login {
    email: string,
    username: string,
    password: string,
    token: string
}