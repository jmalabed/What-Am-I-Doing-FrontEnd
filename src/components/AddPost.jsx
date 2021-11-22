import { useState, useEffect } from "react";

const AddPost = (props) => {
  const [input, setInput] = useState({
    category: "",
    text: "",
  });
  const [categories, setCategories] = useState([]);

  // category functions
  const getCategories = async () => {
    try {
      const allCategories = await fetch("http://localhost:9000/category");
      const parsedCategories = await allCategories.json();
      setCategories(parsedCategories);
    } catch (e) {
      console.log(e);
    }
  };

  // event functions
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
    console.log(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    props.addPost(input);
    console.log("Submitted");
    // add request to back end to post this.
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
