import { FiLogOut } from "react-icons/fi";

export default function ToDo() {
    return (
        <div>
            <div className = 'text-left'>
                <p className = 'bg-slate-300 text-2xl p-3'><FiLogOut />logout</p>           
            </div>
            <div className = 'bg-slate-300 h-screen flex flex-col items-center'>
                <div className = 'bg-white w-2/4 h-full rounded-2xl'>
                    <h1 className = 'text-center text-2xl pt-2 pb-2 border-b-2'>My TODO List</h1>
                </div>
            </div>
        </div>
    )
}