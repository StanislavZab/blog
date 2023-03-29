export interface User {
    id: string;
    username: string;
    avatar?: string;
    role?: string;
}

export interface UserSchema {
    authData?: User;
    _inited: boolean;
}
