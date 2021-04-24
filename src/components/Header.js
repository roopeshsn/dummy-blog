import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className='text-center'>
      <nav className='flex flex-col my-3 mx-auto max-w-xl pt-1 sm:flex-row sm:my-1 sm:justify-between'>
        <p className='relative text-4xl font-semibold inline-block sm:text-2xl sm:top-0.5'>
          The Roopesh Blog
        </p>
        <div className='mt-6 text-base sm:mt-1'>
          <Link to='/' className='mr-4 px-4 py-2 font-semibold'>
            Home
          </Link>
          <Link
            to='/create'
            className='mr-4 text-white font-bold bg-blue-500 inline-block px-3 py-1 rounded hover:bg-blue-600'
          >
            New Blog
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
