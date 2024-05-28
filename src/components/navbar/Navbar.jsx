import { useSelector } from "react-redux";
// style
import "./Navbar.css";
function Navbar() {
  const { value } = useSelector((state) => state.user);

  return (
    <div className="navbar">
      <div className="navbar-container container">
        <h1 className="navbar-logo">CUser</h1>
        <h3 className="navbar-counter">
          {value > 0 ? `You have: ${value}` : `No user :(`}
        </h3>
      </div>
    </div>
  );
}

export default Navbar;
