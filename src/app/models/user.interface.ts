export type Roles = 'CLIENTE' | 'EMPLEADO' | 'ADMIN';

export interface User {
    email: string;
    password: string;
}

export interface UserResponse {
    message : string;
    token: string;
    userId: number;
    rol: Roles;
}