'use client'

export default function Register(){
    return (
        <div className = 'flex flex-col items-center justify-center w-full h-screen bg-slate-100'>
            <form className = 'bg-blue-100 w-3/6 h-3/6 p-4 rounded-2xl shadow-xl'>
                <h1 className = 'text-center text-4xl'>Register</h1>
                <label
                    className = 'text-2xl'>
                    Username:
                </label>
                <input
                    className = 'w-full mb-3 text-xl p-1 rounded-lg'
                    placeholder = 'username'
                />
                <label
                    className = 'text-2xl'>
                    Email:
                </label>
                <input 
                    className = 'w-full mb-3 text-xl p-1 rounded-lg'
                    placeholder = 'email'
                />
                <label
                    className = 'text-2xl'>Password:</label>
                <input 
                    className = 'w-full mb-3 text-xl p-1 rounded-lg'
                    placeholder = 'password'
                />
                <label
                    className = 'text-2xl'>Confirm Password:</label>
                <input 
                    className = 'w-full mb-3 text-xl p-1 rounded-lg'
                    placeholder = 'confirm-password'
                />
                <button className = 'bg-black text-white mt-5 w-full p-2 rounded-full text-2xl' >Register</button>
            </form>
        </div>
    )
}