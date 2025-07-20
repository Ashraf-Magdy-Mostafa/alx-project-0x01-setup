// pages/users/index.tsx

import React, { useState } from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";

import { UserData, UserProps } from "@/interfaces";

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    // internally manage a list of UserProps instead of raw UserData
    const [users, setUsers] = useState<UserProps[]>(
        posts.map((user) => ({ user }))
    );

    const handleAddUser = (newUser: UserProps) => {
        // Assign a new ID if it's missing
        const withId = {
            ...newUser.user,
            id: newUser.user.id ?? users.length + 1,
        };
        setUsers([{ user: withId }, ...users]);
    };

    return (
        <div className="flex flex-col h-screen">
            <Header />

            <main className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-semibold">User List</h1>
                    <button
                        className="bg-blue-700 px-4 py-2 rounded-full text-white"
                        onClick={() => setModalOpen(true)}
                    >
                        Add User
                    </button>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {users.map((userData) => (
                        <UserCard key={userData.user.id} user={userData.user} />
                    ))}
                </div>

                {isModalOpen && (
                    <UserModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        onSubmit={handleAddUser} // ✅ accepts (post: UserProps)
                    />
                )}
            </main>
        </div>
    );
};

// Fetch users from JSONPlaceholder API
export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const posts: UserData[] = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Users;
