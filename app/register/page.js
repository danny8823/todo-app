
export default function Register(){
    return (
        <div class = 'bg-red-100 h-svh flex justify-center items-center'>
            <form class = 'bg-blue-300 flex flex-col w-3/6 p-3 rounded-lg shadow-2xl'>
                <h1 className = 'text-center text-4xl'>Register</h1>
                <label
                    className = 'mb-2 text-lg'>
                    Username:
                </label>
                <input
                    className = 'w-full mb-2 text-2xl'
                    placeholder = 'username'
                />
                <label
                    className = 'mb-2 text-lg'>
                    Email:
                </label>
                <input
                    className = 'w-full mb-2 text-2xl'
                    placeholder = 'email'
                />
                <label
                    className = 'mb-2 text-lg'>Password:</label>
                <input
                    class = 'w-full mb-2 text-2xl'
                    placeholder = 'password'
                />
                <label
                    className = 'mb-2 text-lg'>Confirm Password:</label>
                <input
                    className = 'w-full mb-2 text-2xl'
                    placeholder = 'confirm-password'
                />
                <button>Register</button>
            </form>
        </div>
    )
}