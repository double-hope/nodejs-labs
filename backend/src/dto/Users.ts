export interface UserDto {
    id : string;
    name : string;
    email : string;
    password : string;
    roles: string[];
    refreshToken: string | null;
}