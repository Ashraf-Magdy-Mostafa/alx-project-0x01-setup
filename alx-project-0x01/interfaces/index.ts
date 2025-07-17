
/*
// // USER INTERFACE // // 
*/
interface Geo {
    lat: string;
    lng: string;
}

interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
}

interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}
/*
// // END USER INTERFACE // // 
*/


// export interface UserProps {
//     user: UserData
// }


/* // // Post Interface // // */
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
}
//  title, body, userId, id
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