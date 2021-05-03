import { Link } from "react-router-dom";

const Bloglist = (props) => {
  return (
    <div className='flex justify-center flex-col items-center my-6 mx-auto rounded'>
      <div className='m-4 p-4'>
        <h2 className='text-black-600 text-left font-semibold text-2xl '>{props.title}</h2>
      </div>
      {props.blogs.map((blog) => (
        <div className='text-left m-2' key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <div className='bg-gray-100 p-4 w-96 rounded'>
              <h2 className='text-blue-400 text-2xl'>{blog.blogTitle}</h2>
              <p className='my-3 mx-auto'>Written by {blog.blogAuthor}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;
