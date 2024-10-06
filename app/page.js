export default function Home() {
  return (
    <div>
      <h1>ToDo Appity app</h1>
      <form class = 'bg-blue-100 w-96 h-96 p-4'>
        <label>Username:</label>
        <input
          class = 'w-80'
          />
        <label>Password:</label>
        <input
          class = 'w-80'/>
        <button 
          class = 'bg-black text-white mt-5 w-80 p-2'  
        >Login</button>
      </form>
    </div>
  );
}
