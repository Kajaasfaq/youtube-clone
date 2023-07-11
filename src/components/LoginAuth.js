import React, { useState } from 'react'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDB5GP70QjNuRC9551FJ44Cr4oYoEuRdnY",
  authDomain: "yeahtube-d07a3.firebaseapp.com",
  projectId: "yeahtube-d07a3",
  storageBucket: "yeahtube-d07a3.appspot.com",
  messagingSenderId: "768359699956",
  appId: "1:768359699956:web:56b9004f2f0d31466f55a1",
  measurementId: "G-5C20SMR4NH"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
console.log(auth)

const LoginAuth = () => {
    const [user , Setuser] = useState()
    const [pass , Setpass] = useState()
 
  return (
    <>
    <div className='mt-[100px] mx-[600px] p-20 h-[400px] w-[500px] border border-gray-100 bg-red-100 shadow-xl'>
    <form className="flex flex-col" onClick={(e) => {e.preventDefault()}}>
        <p className="text-center font-bold text-lg">YeahTube</p>
    <label className="flex flex-row p-5 gap-6">
        <p>Username </p>
        <input type="text" className='p-1 h-6 border border-gray-400' onChange={(e) => {Setuser(e.target.value)} } value={user}/>
      </label>
      <label className='flex flex-row p-5 gap-7'>
        <p>Password </p>
        <input  type="password" className='p-1 h-6 border border-gray-400' onChange={(e) => {Setpass(e.target.value)} } value={pass } />
      </label>
      <div className='flex flex-row p-5 gap-6 justify-center' >
        <button  className='bg-red-300 p-2 hover:bg-red-500' type="submit">SignUp</button>
        <button  className='bg-red-300 p-3 hover:bg-red-500' type="submit">LogIn</button>
      </div>
    </form>
    </div>
    </>
  )
    
}

export default LoginAuth