import { useRef } from "react";
import { addForm } from "../../features/userSlice";
import { useDispatch } from "react-redux";
import "./NewUsersForm.css";
import { v4 as uuidv4 } from "uuid";

function NewUsersForm() {
  const rasmRef = useRef();
  const ismRef = useRef();
  const familiyaRef = useRef();
  const yoshRef = useRef();
  const davlatRef = useRef();
  const kasbRef = useRef();
  const maleRef = useRef();
  const femaleRef = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      id: uuidv4(),
      Rasm: rasmRef.current.value,
      Ism: ismRef.current.value,
      Familiya: familiyaRef.current.value,
      Yosh: yoshRef.current.value,
      Davlat: davlatRef.current.value,
      Kasb: kasbRef.current.value,
      Male: maleRef.current.value,
      Femalefe: femaleRef.current.value,
    };
    dispatch(addForm(newObj));
  };
  return (
    <div className="modal-wrapper">
      <div className="overlay">
        <div className="modal">
          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Img URL:</span>
              <input ref={rasmRef} type="url" required />
            </label>
            <label>
              <span>Ism:</span>
              <input ref={ismRef} type="text" required />
            </label>
            <label>
              <span>Familiya:</span>
              <input ref={familiyaRef} type="text" required />
            </label>
            <label>
              <span>Yosh:</span>
              <input ref={yoshRef} type="text" required />
            </label>

            <label>
              <span>Davlat:</span>
              <input ref={davlatRef} type="text" required />
            </label>
            <label>
              <span>Kasb:</span>
              <input ref={kasbRef} type="text" required />
            </label>
            <div className="gender">
              <span>Gender:</span>
              <label>
                <small>Male:</small>
                <input
                  ref={maleRef}
                  type="radio"
                  required
                  name="gender"
                  value="male"
                />
              </label>
              <label>
                <small>Female:</small>
                <input
                  ref={femaleRef}
                  type="radio"
                  required
                  name="gender"
                  value="Female"
                />
              </label>
            </div>

            <button className="modal-btn">submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewUsersForm;
