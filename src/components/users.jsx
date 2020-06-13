import React, { Component } from "react";
// import React, { useEffect, useState } from "react";
import getUserData from "../services/users";


// WITH CLASS
class Users extends Component {
  state = {
    users: [],
  };

constructor() {
    super();
    console.log("Users - Constructor");
  }

  async componentDidMount() {
    console.log("Users - Component Did Mount");
    const users = await getUserData();
    this.setState({ users });
  }

  render() {
    console.log("Users - Render");
    const { users } = this.state;
    return (
        <React.Fragment>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h1>People.</h1>
              </div>
              {users.map((user) => (
                <div
                  className="col-12 effect6 user my-3 py-3"
                  key={user.login.uuid}
                >
                  <div className="row">
                    <div className="col-2 profile-image">
                      <img src={user.picture.thumbnail} alt="user" />
                    </div>
                    <div className="col-7">
                      <h5>{user.name.first}</h5>
                      <p>{user.email}</p>
                      <p>{user.location.street.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
    );
  }
}

// WITH HOOKS
// const Users = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     console.log("User - UseEffect Hook");
//     async function getUser() {
//       const users = await getUserData();
//       setUsers(users);
//     }

//     getUser();
//   }, []);

//   return (
//     <React.Fragment>
//       <div className="container">
//         <div className="row">
//           <div className="col-12">
//             <h1 className="text-center">People.</h1>
//           </div>
//           {users.map((user) => (
//             <div
//               className="col-12 effect6 user my-3 py-3"
//               key={user.login.uuid}
//             >
//               <div className="row">
//                 <div className="col-2 profile-image">
//                   <img src={user.picture.thumbnail} alt="user" />
//                 </div>
//                 <div className="col-7">
//                   <h5>{user.name.first}</h5>
//                   <p>{user.email}</p>
//                   <p>{user.location.street.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </React.Fragment>
//   );
// };

export default Users;
