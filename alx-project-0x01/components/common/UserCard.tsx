import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const initialState: UserData = {
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            lat: "",
            lng: ""
        }
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    }
};

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>(initialState);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;

        // Nested fields handling
        if (name.startsWith("address.")) {
            const addrKey = name.replace("address.", "");
            if (addrKey.startsWith("geo.")) {
                const geoKey = addrKey.replace("geo.", "");
                setUser((prev) => ({
                    ...prev,
                    address: {
                        ...prev.address,
                        geo: { ...prev.address.geo, [geoKey]: value }
                    }
                }));
            } else {
                setUser((prev) => ({
                    ...prev,
                    address: { ...prev.address, [addrKey]: value }
                }));
            }
        } else if (name.startsWith("company.")) {
            const companyKey = name.replace("company.", "");
            setUser((prev) => ({
                ...prev,
                company: { ...prev.company, [companyKey]: value }
            }));
        } else {
            setUser((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
        setUser(initialState); // Reset modal state
    };

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <input name="name" placeholder="Name" value={user.name} onChange={handleChange} className="border px-3 py-2 rounded" required />
                        <input name="username" placeholder="Username" value={user.username} onChange={handleChange} className="border px-3 py-2 rounded" required />
                        <input name="email" placeholder="Email" value={user.email} onChange={handleChange} className="border px-3 py-2 rounded" required />
                        <input name="phone" placeholder="Phone" value={user.phone} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="website" placeholder="Website" value={user.website} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="company.name" placeholder="Company Name" value={user.company.name} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="company.catchPhrase" placeholder="Catchphrase" value={user.company.catchPhrase} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="company.bs" placeholder="Company BS" value={user.company.bs} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="address.street" placeholder="Street" value={user.address.street} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="address.suite" placeholder="Suite" value={user.address.suite} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="address.city" placeholder="City" value={user.address.city} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="address.zipcode" placeholder="Zipcode" value={user.address.zipcode} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="address.geo.lat" placeholder="Geo Lat" value={user.address.geo.lat} onChange={handleChange} className="border px-3 py-2 rounded" />
                        <input name="address.geo.lng" placeholder="Geo Lng" value={user.address.geo.lng} onChange={handleChange} className="border px-3 py-2 rounded" />
                    </div>
                    <div className="flex justify-between mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-600 hover:text-gray-800">Cancel</button>
                        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add User</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserModal;
