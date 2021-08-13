export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    userRole: string;
    offers: string[];
    booked: string[]
}