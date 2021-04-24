import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='text-center my-12 mx-auto'>
      <h2 className='font-semibold text-xl'>Sorry!</h2>
      <p>That page cannot be found.</p>
      <Link to='/'>
        <button className='text-blue-600 hover:underline'>Back to the homepage...</button>
      </Link>
    </div>
  );
};

export default NotFound;
