import Header from "@/components/layout/Header";
import React from 'react'
import { UserData } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UserPropsList {
    posts: UserData[] // [{},{},{}]

}

function Users({ posts }: UserPropsList) {
    return (
        <>
            <div>
                <Header />

            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center gap-6">
                {posts.map((user) => (
                    <UserCard key={user.id} user={user} />
                ))}
            </div>
        </>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts = await response.json();

    return {
        props: {
            posts, // [{},{}]
        },
    };
}
export default Users;
