// pages/users.tsx

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import UserModal from '@/components/common/UserModal';
import { UserData } from '@/interfaces';

const Users: React.FC<{ posts: UserData[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [users, setUsers] = useState<UserData[]>(posts);

    const handleAddUser = (newUser: UserData) => {
        const withId = { ...newUser, id: users.length + 1 };
        setUsers([withId, ...users]);
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
                    {users.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))}
                </div>

                {isModalOpen && (
                    <UserModal
                        isOpen={isModalOpen}
                        onClose={() => setModalOpen(false)}
                        onSubmit={handleAddUser}
                    />
                )}
            </main>
        </div>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const posts = await response.json();

    return {
        props: {
            posts,
        },
    };
}

export default Users;
