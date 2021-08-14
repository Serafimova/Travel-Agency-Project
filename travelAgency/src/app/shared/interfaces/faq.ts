export interface IQuestion {
    _id: string;
    question: string;
    answer: string;
    userId: {
        _id: string;
        userRole: string;
        username: string;
        email: string;
        password: string;
        offers: string[];
        __v: number
    }
}