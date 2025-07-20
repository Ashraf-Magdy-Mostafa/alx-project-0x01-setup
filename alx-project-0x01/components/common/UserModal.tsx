// components/common/UserModal.tsx

import React, { useState } from 'react';
import { UserModalProps, UserData } from '@/interfaces';

const defaultData: Omit<UserData, 'id'> = {
    name: '',
    username: '',
    email: '',
    address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
            lat: '',
            lng: '',
        },
    },
    phone: '',
    website: '',
    company: {
        name: '',
        catchPhrase: '',
        bs: '',
    },
};

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [formData, setFormData] = useState<Omit<UserData, 'id'>>(defaultData);

    if (!isOpen) return null;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        const keys = name.split('.');
        if (keys.length > 1) {
            setFormData((prevData: any) => {
                const updatedData = { ...prevData };
                let current = updatedData;

                for (let i = 0; i < keys.length - 1; i++) {
                    current = current[keys[i]];
                }

                current[keys[keys.length - 1]] = value;
                return updatedData;
            });
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = () => {
        const newUser: UserData = {
            ...formData,
            id: Math.floor(Math.random() * 10000), // Generate ID for mock just in this example
        };
        onSubmit(newUser);
        setFormData(defaultData);
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-xl">
                <h2 className="text-xl font-bold mb-4">Add New User</h2>

                <div className="grid grid-cols-2 gap-3 mb-4">
                    <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2" />
                    <input name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="border p-2" />
                    <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2" />
                    <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2" />
                    <input name="website" placeholder="Website" value={formData.website} onChange={handleChange} className="border p-2" />
                    <input name="address.city" placeholder="City" value={formData.address.city} onChange={handleChange} className="border p-2" />
                    <input name="address.street" placeholder="Street" value={formData.address.street} onChange={handleChange} className="border p-2" />
                    <input name="address.zipcode" placeholder="Zipcode" value={formData.address.zipcode} onChange={handleChange} className="border p-2" />
                    <input name="company.name" placeholder="Company Name" value={formData.company.name} onChange={handleChange} className="border p-2" />
                </div>

                <div className="flex justify-end space-x-2">
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
                    <button onClick={onClose} className="bg-gray-400 px-4 py-2 rounded">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default UserModal;
