import moment from "moment";
import { useState, useEffect } from "react";
import axios from "axios";
const PostTable = (props) => {
  const [categories, setCategories] = useState([]);

  // category functions
  const getCategories = async () => {
    try {
      // const allCategories = await fetch("http://localhost:9000/category");
      // axios get request
      const allCategories = await axios.get("http://localhost:9000/category");
      const parsedCategories = allCategories.data;
      setCategories(parsedCategories);
      console.log(parsedCategories);
    } catch (e) {
      console.log(e);
    }
  };

  const getPosts = async () => {
    try {
      console.log(props);
      // const allPosts = await fetch("http://localhost:9000/post");
      // adding axios get requeset
      const allPosts = await axios.get("http://localhost:9000/post");
      const parsedPosts = allPosts.data;
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
      props.setPosts(parsedPosts);
      console.log(parsedPosts);
    } catch (err) {
      console.log(err);
    }
  };

  // // re-rendering variables
  const makePostRow = () =>
    props.posts.map((post) => (
      <tr key={post._id}>
        <td>{moment(post.createdAt).format("MMMM Do YYYY, h:mm:ss a")}</td>
        <td>{post.text}</td>
        <td>
          {categories.map((category) =>
            category._id === post.category ? category.name : ""
          )}
        </td>
        <td onClick={() => props.deleteItem(post._id)}>X</td>
      </tr>
    ));

  // use effect
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    makePostRow();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date & Time</th>
            <th>Activity</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{makePostRow()}</tbody>
      </table>
    </div>
  );
};
export default PostTable;
