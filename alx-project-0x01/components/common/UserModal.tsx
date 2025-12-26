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

    if (name.startsWith('address.')) {
      const key = name.split('.')[1];
      setUser((prev) => ({
        ...prev,
        address: { ...prev.address, [key]: value },
      }));
    } else if (name.startsWith('company.')) {
      const key = name.split('.')[1];
      setUser((prev) => ({
        ...prev,
        company: { ...prev.company, [key]: value },
      }));
    } else {
      setUser((prev) => ({ ...prev, [name]: value }));
    }
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

        <form onSubmit={handleSubmit} className='space-y-3'>
          <input
            name='name'
            placeholder='Name'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />

          <input
            name='username'
            placeholder='Username'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />

          <input
            name='email'
            placeholder='Email'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />

          <input
            name='phone'
            placeholder='Phone'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />

          <input
            name='address.city'
            placeholder='City'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />

          <input
            name='company.name'
            placeholder='Company Name'
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
          />

          <div className='flex justify-between'>
            <button type='button' onClick={onClose} className='text-gray-600'>
              Cancel
            </button>

            <button
              type='submit'
              className='bg-blue-600 text-white px-4 py-2 rounded'
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
