export interface IOffer {
    _id: string;
    offerName: string;
    country: string;
    imageUrl: string;
    days: string;
    transport: string;
    price: string;
    description: string;
    userId: {
        _id: string;
        userRole: string;
        username: string;
        email: string;
        password: string;
        offers: string[];
        __v: number
    },
    __v: number
}