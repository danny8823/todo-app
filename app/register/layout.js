export default function RegisterLayout({
    children,
}) {
    return (
        <div>
            <nav class = 'w-100 bg-amber-100 h-9 m-0 flex justify-center items-center'> 
                <a class = 'mr-5'>Home</a>
                <a class = 'mr-5'>List</a>
                <a class = 'mr-5'>Login</a>
                <a class = 'mr-5'>Logout</a>
            </nav>
            {children}
        </div>
    )
}