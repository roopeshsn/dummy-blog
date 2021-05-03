import Bloglist from "./Bloglist";
import useFetch from "../useFetch";
import useObjectToArrayHandler from "../useObjectToArrayHandler";

const Home = () => {
  const { data, isPending, error } = useFetch(
    "https://dummy-blog-9878b-default-rtdb.asia-southeast1.firebasedatabase.app/blogs.json"
  );
  const [blogs] = useObjectToArrayHandler(data);
  return (
    <div className='home'>
      {error && <div className='text-center relative top-20'>{error}</div>}
      {isPending && <div className='text-center relative top-20'>Loading...</div>}
      {blogs && <Bloglist blogs={blogs} title='All Blogs!' />}
    </div>
  );
};

export default Home;
