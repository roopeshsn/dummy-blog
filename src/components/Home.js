import Bloglist from "./Bloglist";
import useFetch from "../useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch("http://localhost:8000/blogs");
  return (
    <div className='home'>
      {error && <div className='text-center relative top-20'>{error}</div>}
      {isPending && <div className='text-center relative top-20'>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title='All Blogs!' />}
    </div>
  );
};

export default Home;
