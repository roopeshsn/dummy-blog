import { useState, useEffect } from "react";

export default function useObjectToArrayHandler(data) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const loadedBlogs = [];
    for (const key in data) {
      loadedBlogs.push({
        id: key,
        blogTitle: data[key].title,
        blogBody: data[key].body,
        blogAuthor: data[key].author,
      });
    }
    setBlogs(loadedBlogs);
  }, [data]);

  return [blogs];
}
