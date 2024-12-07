import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

function Profile() {
  const {user}=useAuth()
  return (
    <div className="w-1/2 p-10 my-10 mx-auto bg-gray-50 text-center flex flex-col gap-5 items-center">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Helium | Profile</title>
      </Helmet>
      <h2 className="text-3xl font-bold">UserName: {user.displayName}</h2>
      <div className='flex items-center gap-5'>
        <span className="font-semibold mb-4">UserEmail: {user.email}</span>
        <img className=' w-16 rounded-full ' src={user.photoURL} alt="User Profile" />
      </div>
      <button className="btn btn-sm btn-info rounded-none link-hover">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-5 h-5 rtl:rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <Link to="/">Go back</Link>
      </button>
    </div>
  );
}

export default Profile
