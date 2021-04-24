import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("mario");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Done");
      setIsPending(false);
      history.push("/");
    });
  };

  return (
    <div className='max-w-md my-12 mx-auto text-center'>
      <h2 className='text-xl text-blue-600 font-semibold'>Add a New Blog</h2>
      <form className='mx-6 my-6' onSubmit={handleSubmit}>
        <label className='text-left block'>Blog title:</label>
        <input
          className='w-full block py-1.5 px-2.5 my-2.5 mx-0 border-gray-200 border-solid border-2'
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className='text-left block'>Blog body:</label>
        <textarea
          className='w-full block py-1.5 px-2.5 my-2.5 mx-0 border-gray-200 border-solid border-2'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label className='text-left block'>Blog author:</label>
        <select
          className='w-full block py-1.5 px-2.5 my-2.5 mx-0 border-gray-200 border-solid border-2'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
        </select>
        {!isPending && (
          <button className='bg-blue-400 font-semibold text-white rounded my-6 px-3 py-1'>
            Add Blog
          </button>
        )}
        {isPending && (
          <button disabled className='bg-blue-400 font-semibold text-white rounded my-6 px-3 py-1'>
            Adding Blog...
          </button>
        )}
      </form>
    </div>
  );
};

export default Create;
