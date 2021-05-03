import { useHistory, useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, error, isPending } = useFetch(
    "https://dummy-blog-9878b-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json/" + id
  );
  const history = useHistory();

  const handleDelete = () => {
    fetch(
      "https://dummy-blog-9878b-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json/" +
        blog.id,
      {
        method: "DELETE",
      }
    ).then(() => {
      history.push("/");
    });
  };

  return (
    <div className='m-6'>
      {isPending && <div className='text-center relative top-20'>Loading...</div>}
      {error && <div className='text-center relative top-20'>{error}</div>}
      {blog && (
        <article className='my-12 mx-auto max-w-xl'>
          <h2 className='text-blue-500 font-semibold text-2xl'>{blog.title}</h2>
          <p className='text-black text-base'>
            Written by <b>{blog.author}</b>
          </p>
          <p className='mt-4 text-base text-gray-500'>{blog.body}</p>
          <button
            className='bg-red-500 font-semibold text-white rounded px-3 py-1 mt-6'
            onClick={handleDelete}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
