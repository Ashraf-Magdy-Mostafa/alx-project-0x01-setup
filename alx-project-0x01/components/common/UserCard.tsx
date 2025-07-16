import { UserProps } from "@/interfaces";
const UserCard: React.FC<UserProps> = ({ user }) => {
    return (
        <div className="border rounded-xl p-6 shadow-md hover:shadow-lg transition-all bg-white max-w-md mx-auto mb-4">
            <h2 className="text-xl font-bold text-blue-600">{user.name}</h2>
            <p className="text-gray-600">@{user.username}</p>
            <p className="mt-2 text-sm text-gray-700">
                <strong>Email:</strong> {user.email}<br />
                <strong>Phone:</strong> {user.phone}<br />
                <strong>Website:</strong> <a href={`https://${user.website}`} target="_blank" rel="noreferrer" className="text-blue-500 underline">{user.website}</a>
            </p>
            <div className="mt-4 text-sm text-gray-800">
                <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city} ({user.address.zipcode})</p>
                <p><strong>Company:</strong> {user.company.name}</p>
                <p className="italic text-gray-500">"{user.company.catchPhrase}"</p>
            </div>
        </div>
    );
};

export default UserCard;