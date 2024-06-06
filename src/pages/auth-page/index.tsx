// import { useNavigate } from "react-router-dom";

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const text = "Hello World!";
//   const id = 27;

//   return (
//     <main className="container">
//       <div>
//         <button
//           onClick={() =>
//             navigate("/auth-page/landing-page/" + id, {
//               state: {
//                 text: text,
//               },
//             })
//           }
//         >
//           Navigate to Landing Page
//         </button>
//       </div>
//     </main>
//   );
// };

// export default AuthPage;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom"
// import Swal from "sweetalert2"

// import { data } from "../dummy/credentials"

// const AuthPage = () => {
//     const navigate = useNavigate();
//     const [credentials, setCredentials] = useState({ email: "", password: "",});

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setCredentials({
//             ...credentials,
//             [name]: value
//         });
//     };

//     const handleSubmit = (e: React.fromEvent<HTMLInputElement>) => {
//         e.preventDefault();
//         console.log(credentials);
//         if(
//             credentials.email !== data.email &&
//             credentials.password!==  data.password
//     ){
//         Swal.fire({
//             icon:"error",
//             tittle:"incorrect password or email",
//             text: "Please enter your password"
//             confirmButtonText: "OK",
//     });
//     } else {
//         Swal.fire({
//             icon: "success",
//             title: "Login Success",
//             text: "You have successfully logged in",
//             confirmButtonText: "OK",
//         }).then((response) => {
//             if (response.isConfirmed) {
//                 navigate("/auth-page/landing-page/23");
//             }
//         });
//     }
// };


//   return (
//     <main className= "w-screen h-full flex justify-center items-center">
//         <div className="w-60 grid grid-cols-1">
//             <form className="space-y-5">
//                 <input
//                 id="email"
//                 type="email"
//                 name="email"
//                 value={credentials.email}
//                 placeholder="type your email here ..."
//                 onChange={handleChange}
//                 />
//                 <input
//                 id="password"
//                 type="password"
//                 name="password"
//                 value={credentials.password}
//                 placeholder="type your password here ..."
//                 onChange={handleChange}
//                 />
//                 <TailwindButton id="login-button" tittle="login" type="submit" />
//             </form>
//         </div>
//     </main>
//   );
// };

// export default AuthPage;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { data } from "../dummy/credentials";

import TailwindButton from "../../components/TailwindButton";
import Input from "../../components/Input";
import Swal from "sweetalert2";

const AuthPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      credentials.email !== data.email &&
      credentials.password !== data.password
    ) {
      Swal.fire({
        icon: "error",
        title: "incorrect email or password",
        text: "please try your correct email and password",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "login success",
        text: "successfully login",
        confirmButtonText: "Ok",
      }).then((response) => {
        if (response.isConfirmed) {
          navigate("auth-page/landing-page/:id");
        }
      });
    }
  };

  return (
    <main className="w-screen h-full flex justify-center items-center">
      <div className="w-110 grid grid-cols-1">
        <form onSubmit={handleSubmit} className="space-y-5">
          <Input
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            placeholder="type your email here..."
            onChange={handleChange}
          />
          <Input
            id="password"
            type="password"
            name="password"
            value={credentials.password}
            placeholder="type your password here..."
            onChange={handleChange}
          />
          <TailwindButton id="login-button" title="Login" type="submit" />
        </form>
      </div>
    </main>
  );
};

export default AuthPage;