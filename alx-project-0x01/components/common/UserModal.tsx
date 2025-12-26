import React, { useState } from "react";
import { UserData, UserModalProps, UserProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedUser: UserProps = {
      id: 0,
      name: user.name,
      username: user.username,
      email: user.email,
      phone: user.phone,
      website: user.website,
      address: user.address,
      company: user.company,
    };

    onSubmit(formattedUser);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Add New User
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={user.name}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />

          <input
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />

          <input
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />

          <input
            name="phone"
            placeholder="Phone"
            value={user.phone}
            onChange={handleChange}
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />

          <input
            name="website"
            placeholder="Website"
            value={user.website}
            onChange={handleChange}
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />

          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={onClose}
              className="text-gray-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
