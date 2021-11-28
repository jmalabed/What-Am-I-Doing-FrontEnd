import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const Categories = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const allCategories = await axios.get("http://localhost:9000/category");
      console.log(allCategories);
      const parsedCategories = allCategories.data;
      setCategories(parsedCategories);
      console.log(parsedCategories);
    } catch (err) {
      console.log(err);
    }
  };

  const editCategory = async (id) => {
    try {
      const editedCategory = await axios.put(
        "http://localhost:9000/category/" + id
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  //re-rendering components
  const catList = categories.map((category) => (
    <li key={category._id}>
      {category.name}
      <Link to="/edit">
        <button>edit</button>
      </Link>
    </li>
  ));

  return (
    <div>
      <p>Categories component</p>
      {catList}
      <button>Add New Category!</button>
    </div>
  );
};
export default Categories;
