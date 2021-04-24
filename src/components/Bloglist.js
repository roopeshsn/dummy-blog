import { Link } from "react-router-dom";

const Bloglist = ({ blogs, title }) => {
  return (
    <div className='flex justify-center flex-col items-center my-6 mx-auto rounded'>
      <div className='m-4 p-4'>
        <h2 className='text-black-600 text-left font-semibold text-2xl '>{title}</h2>
      </div>
      {blogs.map((blog) => (
        <div className='text-left rounded bg-gray-100 p-4 w-96' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2 className='text-blue-400 text-2xl'>{blog.title}</h2>
            <p className='my-3 mx-auto'>Written by {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
