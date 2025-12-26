import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  address,
  company,
}) => {
  return (
    <div className='max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300'>
      <h2 className='text-2xl font-semibold text-gray-800'>{name}</h2>
      <p className='text-gray-500'>@{username}</p>

      <div className='mt-4 text-gray-600'>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Phone: </strong> {phone}
        </p>
        <p>
          <strong>Website</strong> {website}
        </p>
      </div>

      <div className='mt-4 text-gray-600'>
        <p>
          <strong>City:</strong> {address.city}
        </p>
        <p>
          <strong>Street:</strong> {address.street}
        </p>
      </div>

      <div className='mt-4 text-sm text-gray-500'>
        <p>
          <strong>Company:</strong> {company.name}
        </p>
        <p>{company.catchPhrase}</p>
      </div>
    </div>
  );
};

export default UserCard
