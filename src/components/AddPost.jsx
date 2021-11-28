import { useState, useEffect } from "react";
import axios from "axios";

const AddPost = (props) => {
  const [input, setInput] = useState({
    category: "",
    text: "",
  });
  const [categories, setCategories] = useState([]);

  // category functions
  const getCategories = async () => {
    try {
      // const allCategories = await fetch("http://localhost:9000/category");
      // adding axios! get request
      const allCategories = await axios.get("http://localhost:9000/category");
      const parsedCategories = allCategories.data;
      console.log(parsedCategories);
      setCategories(parsedCategories);
    } catch (e) {
      console.log(e);
    }
  };

  // event functions
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addPost(input);
  };

  // use effect
  useEffect(() => {
    getCategories();
  }, []);

  // re-rendering components
  const dropDownOption = categories.map((category) => {
    return (
      <option name={category.name} value={category._id} key={category._id}>
        {category.name}
      </option>
    );
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select id="category" name="category" onChange={handleChange}>
          <option>Select One...</option>
          {dropDownOption}
        </select>
        <input
          type="textarea"
          placeholder="I am...."
          value={input.text}
          onChange={handleChange}
          name="text"
        />
        <input type="submit" value="Enter!" />
      </form>
    </div>
  );
};
export default AddPost;
