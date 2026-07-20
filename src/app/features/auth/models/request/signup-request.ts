import { SignupTenantRequest } from "./signup-tenant-request";
import { SignupUserRequest } from "./signup-user-request";

export interface SignupRequest{
    user: SignupUserRequest,
    tenant: SignupTenantRequest
}