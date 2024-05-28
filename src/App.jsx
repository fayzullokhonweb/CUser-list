import List from "./components/List";
import "./App.css";
import NewUsersForm from "./components/newUcer/NewUsersForm";
//components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { openModal, closeModal } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((store) => store.user);
  const { value } = useSelector((state) => state.user);
  return (
    <div
      onClick={(e) => {
        if (e.target.className === "overlay") dispatch(closeModal());
      }}
      onKeyDown={(e) => {
        if (e.key === "Escape") dispatch(closeModal());
      }}
      className="App"
    >
      <Navbar />

      <main>
        <div className="no-users">{value === 0 && <h2>No Users</h2>}</div>
        <List />
      </main>
      {isOpen && <NewUsersForm />}
      <button onClick={() => dispatch(openModal())} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
