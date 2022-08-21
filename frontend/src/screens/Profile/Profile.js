import * as React from "react";

export const Profile = () => {
  const auth = localStorage.getItem("user");
  const authDetail = JSON.parse(auth);
  return (
    <div className="profile">
      <table className="profile-table">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
        </tr>
        <tr>
          <td>{authDetail._id}</td>
          <td>{authDetail.name}</td>
          <td>{authDetail.email}</td>
        </tr>
      </table>
    </div>
  );
};
