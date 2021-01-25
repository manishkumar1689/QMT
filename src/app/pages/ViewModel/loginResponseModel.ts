import { UserRoleModel } from "./userRoleModel";

export class LoginResponse {
    LoginDetailID: any;
    PersonnelId: number;
    Username: string;
    Roles: UserRoleModel[];
    Domains: any;
    ApplicationRole: string;
    ApplicationRoleGroup: string;
    MarketAreaId: any;
    AuthToken: string;
    IdleTimeoutMins: number;
    ApplicationVersion: string;
    UserId: string;
    Email: string;
    DisplayName: string;
    Department: string;
    SessionId: string;
    HasPendingFeedback: boolean;
    UserPermissionList: string[];
    IsAuthenticationResponseSucesss: boolean;
}

