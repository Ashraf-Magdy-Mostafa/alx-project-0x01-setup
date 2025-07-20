// interfaces/index.ts

// Common types
export interface Geo {
    lat: string;
    lng: string;
}

export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

// Post interfaces
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
}

export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
}

// User interfaces
export interface UserData {
    id?: number; // Optional for new users
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}

export interface UserProps {
    user: UserData;
}

export interface UserModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (user: UserData) => void;
}
