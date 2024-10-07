'use client'

import Link from "next/link";

export default function Home() {
  
  const loginButtonHandler = () => {
    console.log('hi')
  }

  return (
    <div className = 'flex flex-col items-center justify-center w-full h-screen bg-slate-100'>
      <h1 className = 'mb-10 text-3xl'>To-Do Appity App</h1>
      <div>
        <form className = 'bg-blue-100 w-96 h-96 p-4 rounded-2xl shadow-xl'>
          <label className = 'text-2xl'>Username:</label>
          <input
            className = 'w-full mb-3 text-xl p-1 rounded-lg'
            placeholder = 'username'
            />
          <label className = 'text-2xl'>Password:</label>
          <input
            className = 'w-full text-xl p-1 rounded-lg'
            placeholder = 'password'
            />
          <button
            onClick = {loginButtonHandler}
            className = 'bg-black text-white mt-5 w-full p-2 rounded-full text-2xl'  
          >Login</button>
        </form>
      </div>
      <div>
        <span><Link className = 'text-blue-500' href = '/register'>Don't have an account? Register</Link></span>
      </div>
    </div>
  );
}
