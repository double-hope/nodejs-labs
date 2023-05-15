import { Roles } from "@/common";

export interface UserInfo {
    id: number;
    email: string;
    roles: Roles[];
}

export interface DecodedToken {
    UserInfo: UserInfo;
}