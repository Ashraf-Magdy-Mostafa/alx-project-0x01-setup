// components/common/UserCard.tsx

import React from "react";
import { UserProps } from "@/interfaces"; // ✅ Required import

const UserCard: React.FC<UserProps> = ({ user }) => {
    return (
        <div className="border rounded-lg shadow p-4">
            <h2 className="text-lg font-bold text-gray-800">{user.name}</h2>
            <p className="text-sm text-gray-600"><strong>Username:</strong> {user.username}</p>
            <p className="text-sm text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-sm text-gray-600"><strong>Phone:</strong> {user.phone}</p>
            <p className="text-sm text-gray-600"><strong>Website:</strong> {user.website}</p>
            <p className="text-sm text-gray-600"><strong>Company:</strong> {user.company.name}</p>
            <p className="text-sm text-gray-600"><strong>Address:</strong> {user.address.city}, {user.address.street}</p>
        </div>
    );
};

export default UserCard;
