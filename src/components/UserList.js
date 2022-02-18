import axios from "axios";
import React, { useEffect, useState } from "react";
import User from "./User";
import { Spinner } from "react-bootstrap";
function UserList() {
  const [users, setUsers] = useState();
  const [error, setError] = useState(null);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .then((err) => setError(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        backgroundColor: "gray",
      }}
    >
      {/* {error && <p>can't load data</p>}
      {users && users.map((el)=><User el={el} key={el.id} />)} */}
      {error ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        users?.map((el) => <User el={el} key={el.id} />)
      )}
    </div>
  );
}

export default UserList;
