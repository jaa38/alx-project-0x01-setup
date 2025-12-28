import { UserData, UserModalProps } from '@/interfaces';
import React, { useState } from 'react';

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
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
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
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
    onSubmit(user);
    onClose();
  };

  return (
    <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-white rounded-lg p-8 shadow-lg w-full max-w-md'>
        <h2 className='text-2xl font-bold mb-4 text-gray-800'>Add New User</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
          className='w-full mb-3 px-4 py-2 border rounded'
        />

        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleChange}
          className='w-full mb-3 px-4 py-2 border rounded'
        />

        <input
          type='text'
          name='phone'
          placeholder='Phone'
          onChange={handleChange}
          className='w-full mb-3 px-4 py-2 border rounded'
        />

        <input
          type='text'
          name='website'
          placeholder='Website'
          onChange={handleChange}
          className='w-full mb-3 px-4 py-2 border rounded'
        />

        <div className='flex justify-between mt-4'>
          <button type='button' onClick={onClose}>
            Cancel
          </button>
          <button
            type='submit'
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModal;
