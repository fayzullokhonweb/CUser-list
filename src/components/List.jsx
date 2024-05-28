import React from "react";
import { useSelector } from "react-redux";
import "./userlist/usersList.css";
import { dalateForm } from "../features/userSlice";
import { useDispatch } from "react-redux";

function List() {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.user);
  return (
    <div className="userList">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner">
                <img src={user.Rasm} height={150} width={150} />
                <h3>
                  {user.Ism} {user.Familiya} ,{user.Yosh}
                </h3>
                <p>Davlat: {user.Davlat}</p>
                <p>Kasb: {user.Kasb}</p>
                <p>Gender: {user.Male}</p>

                <button
                  onClick={() => {
                    dispatch(dalateForm(user.id));
                  }}
                >
                  Dalete{" "}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default List;
