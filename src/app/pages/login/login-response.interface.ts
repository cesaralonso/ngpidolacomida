export interface LoginResponseInterface {
    id: string;
    ttl: number;
    created: string;
    userId: string;
    success?: string;
    message?: string;
    token?: string;
}
