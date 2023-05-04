import { Roles } from "@/common";

export interface UserInfo {
    id: string;
    email: string;
    roles: Roles[];
}

export interface DecodedToken {
    UserInfo: UserInfo;
}