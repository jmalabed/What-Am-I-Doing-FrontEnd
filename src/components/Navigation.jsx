import { useNavigator, Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      <span>
        <Link to="/" className="p-5">
          Home
        </Link>
        <Link to="/categories" className="p-5">
          Categories
        </Link>
        <Link to="/about" className="p-5">
          About
        </Link>
      </span>
    </div>
  );
};
export default Navigation;
