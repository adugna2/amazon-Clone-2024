/* eslint-disable no-unused-vars */
// src/components/Auth/Auth.jsx

// import React, { useState, useContext} from 'react';
// import classes from './Auth.module.css'
// import { auth } from '../../Utility/firebase';
// import {Link, useNavigate} from 'react-router-dom'
// import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// import {ClipLoader} from 'react-spinners'
// import { Type } from '../../Utility/action.type';
// import { DataContext } from '../../componentes/DataProvider/DataProvider';
// function Auth() {
// const [email, setEmail] = useState('');
//  const [password, setPassword] = useState('');
//    const [error, setError] = useState('');
//     const [loading, setLoading] = useState({ signIn: false, signUp: false });
//     const [{user },dispatch]=useContext(DataContext)
//     const navigate=useNavigate()
//     console.log(user)
//  const authHandler =async (e) => {
//     e.preventDefault();
//     console.log(e.target.name)
//     if (e.target.name=="signin"){
// //firebase auth 
// setLoading({ ...loading,signIn:true})
// signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
//   console.log(userInfo)
//   dispatch({
//       type: Type.SET_USER,
//           user: userInfo.user,
//         });
//         setLoading({...loading,signIn:false})
//         navigate("/");
//     })
//     .catch((err)=>{setError(err.message);
//         setLoading({...loading,signIn:false})

//     }) 
//     }else{
// createUserWithEmailAndPassword(auth,email,password).then((userInfo)=> {
//   setLoading({...loading,signUp:true})
//   // console.log(userInfo)
//   dispatch({
//         type: Type.SET_USER,
//           user: userInfo.user,
//         });
//         setLoading({...loading,signUp:false})
//     })
//   .catch((err)=>{setError(err.message);
//     setLoading({...loading,signUp:false})
//     navigate("/");
//     }) 
//     }
//   }

// return  (
//     <section className={classes.login}>
//       <Link to={"/"}>
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" />
//       </Link>
//       <div className={classes.login__container}>
//         <h1>Sign-in</h1> {error && <p className={classes.error}>{error}</p>}       
//         <form onSubmit={authHandler}>
//           <div>             
//             <label htmlFor="email">Email</label>
//           <input
//             value={email}
//              onChange={(e) => setEmail(e.target.value)}
//              type="email"
//                id="email"
//              />
//         </div>
//           <div>
//              <label htmlFor="password">Password</label>
//              <input value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"id="password"/>
//           </div>
//           <button
//             className={classes.login_signinButton}
//             type="submit"
//             name="signin" > {loading.signIn ?( <ClipLoader color="#000" size={15} ></ClipLoader>) :( 'Sign in')}
//             </button>
//           </form>  
//              <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
//        </p> 
// {/* create account button */}
//           <button type="submit"name="signup"
//         onClick={authHandler}
//             className={classes.login_registerButton}
//         >{loading.signUp ?( <ClipLoader color="#000" size={15} ></ClipLoader>) :( 'Create your Amazon account')}
          
//             </button>
//           {/* {loading.signUp ? <ClipLoader color="#000" size={15} /> : 'Create your Amazon account'} */}
//           {error && (
//           <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
//         )}
        
//      </div>
//    </section>
//    );

//   }
//  export default Auth;




import React ,{ useState, useContext} from 'react';
import classes from './Auth.module.css'
import { auth } from '../../Utility/firebase';
 import {Link, useNavigate,useLocation, redirect} from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import {ClipLoader} from 'react-spinners'
import { Type } from '../../Utility/action.type';
import { DataContext } from '../../Components/DataProvider/DataProvider';
function Auth() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
  const [error, setError] = useState('');
    const [loading, setLoading] = useState({ signIn: false, signUp: false });
    const [{user },dispatch]=useContext(DataContext)
    const navigate=useNavigate()
    const navStateData=useLocation()
    console.log(navStateData)
    // console.log(user)
const authHandler =async (e) => {
    e.preventDefault();
    console.log(e.target.name)
    if (e.target.name=="signin"){
//firebase auth 
setLoading({ ...loading,signIn:true})
signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
  console.log(userInfo)
  dispatch({
      type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading,signIn:false})
        navigate(navStateData?.state?.redirect ||"/");
    })
    .catch((err)=>{setError(err.message);
        setLoading({...loading,signIn:false})

    }) 
    }else{
createUserWithEmailAndPassword(auth,email,password).then((userInfo)=> {
  setLoading({...loading,signUp:true})
  //  console.log(userInfo)
  dispatch({
        type: Type.SET_USER,
          user: userInfo.user,
        });
        setLoading({...loading,signUp:false})
    })
  .catch((err)=>{setError(err.message);
    setLoading({...loading,signUp:false})
    navigate("/");
    }) 
    }
  }

return  (
    <section className={classes.login}>
      <Link to={"/"}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" />
      </Link>
      <div className={classes.login__container}>
        <h1>Sign-in</h1> {navStateData?.state?.msg &&(
<small 
  style={{ padding:"5px",
    textAlign: "center",
    color:"red",
    fontWeight: "bold",
  }}
  >
   {navStateData?.state?.msg } 
</small>
        )}
        {error && <p className={classes.error}>{error}</p>}       
        <form onSubmit={authHandler}>
          <div>             
            <label htmlFor="email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
              id="email"
            />
        </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"/>
          </div>
          <button
    
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_signinButton }
            > {
              loading.signIn ?(
                <ClipLoader color="#000" size={15} ></ClipLoader>) :( 'Sign in'

            )}
            </button>
          </form>  
             <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
      </p> 
{/* create account button */}
          <button 
          type="submit"
          name="signup"
            onClick={authHandler}
            className={classes.login_registerButton}
        >
          {loading.signUp ?(
             <ClipLoader color="#000" size={15} ></ClipLoader>) :( 'Create your Amazon account')}
          
            </button>
          {/* {loading.signUp ? <ClipLoader color="#000" size={15} /> : 'Create your Amazon account'} */}
          {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
        
    </div>
  </section>
  );

  }
 export default Auth;

































































































































































































































































































































































































































































//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState({ signIn: false, signUp: false });
//   const [{ user }, dispatch] = useContext(DataContext);
//   const navigate = useNavigate();

//   const authHandler = async (e) => {
//     e.preventDefault();
//     const { name } = e.target;

//     try {
//       let userInfo;
//       if (name === 'signin') {
//         setLoading({ signIn: true, signUp: false });
//         userInfo = await signInWithEmailAndPassword(auth, email, password);
//       } else if (name === 'signup') {
//         setLoading({ signIn: false, signUp: true });
//         userInfo = await createUserWithEmailAndPassword(auth, email, password);
//       }

//       console.log('UserInfo:', userInfo);

//       if (userInfo && userInfo.user) {
//         dispatch({
//           type: Type.SET_USER,
//           user: userInfo.user,
//         });
//         navigate("/");
//       } else {
//         throw new Error('No user information found');
//       }
//     } catch (err) {
//       console.error('Authentication Error:', err);
//       setError(err.message);
//     } finally {
//       setLoading({ signIn: false, signUp: false });
//     }
//   };

//   return (
//     <section className={classes.login}>
//       <Link to="/">
//         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="Amazon Logo" />
//       </Link>
//       <div className={classes.login__container}>
//         <h1>Sign-in</h1>
//         {error && <p className={classes.error}>{error}</p>}
//         <form onSubmit={authHandler}>
//           <div>
//             <label htmlFor="email">Email</label>
//             <input
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               type="email"
//               id="email"
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password</label>
//             <input
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               type="password"
//               id="password"
//             />
//           </div>
//           <button
//             className={classes.login_signinButton}
//             type="submit"
//             name="signin"
//           >
//             {loading.signIn ? <ClipLoader color="#000" size={15} /> : 'Sign in'}
//           </button>
//           <button
//             className={classes.login_registerButton}
//             type="submit"
//             name="signup"
//           >
//             {loading.signUp ? <ClipLoader color="#000" size={15} /> : 'Create your Amazon account'}
//           </button>
//         </form>
//         <p>
//           By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default Auth;
