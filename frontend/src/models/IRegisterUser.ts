import { AuthUser } from "./IAuthUser";

export interface RegisterUser extends AuthUser {
    name: string;
    email: string;
    password: string;
}