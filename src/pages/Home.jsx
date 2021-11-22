import PostTable from "../components/PostTable";
import AddPost from "../components/AddPost";
import { useState, useEffect } from "react";

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  // post functions
  const addPost = async (data) => {
    try {
      const configs = {
        body: JSON.stringify(data),
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      };
      const addedPost = await fetch("http://localhost:9000/post", configs);
      const parsedPost = await addedPost.json();
      console.log(parsedPost);
      setPosts([...posts, parsedPost]);
    } catch (e) {
      console.log(e);
    }
  };

  const getPosts = async () => {
    try {
      console.log(props);
      const allPosts = await fetch("http://localhost:9000/post");
      const parsedPosts = await allPosts.json();
      const swap = (arr) => {
        let a = 0;
        let b = arr.length - 1;
        while (a < b) {
          const temp = arr[a];
          arr[a] = arr[b];
          arr[b] = temp;
          a++;
          b--;
        }
        console.log(arr);
      };
      swap(parsedPosts);
      setPosts(parsedPosts);
      console.log(parsedPosts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      <AddPost addPost={addPost} posts={posts} setPosts={setPosts} />
      <PostTable posts={posts} setPosts={setPosts} />
    </div>
  );
};
export default Home;
