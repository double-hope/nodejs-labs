import { Roles } from "@/common";
import { ReactNode } from "react"

export type AuthLayoutProps = {
    allowedRoles: Roles[];
    children: ReactNode;
}