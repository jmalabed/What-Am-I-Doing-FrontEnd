import { useNavigator, Link } from "react-router-dom";

const Navigation = (props) => {
  return (
    <div>
      <span>
        <Link to="/" className="p-5">
          Home
        </Link>
        <Link to="/past" className="p-5">
          Old
        </Link>
        <Link to="/about" className="p-5">
          About
        </Link>
      </span>
    </div>
  );
};
export default Navigation;
