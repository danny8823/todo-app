import { FiLogOut } from "react-icons/fi";
import Modal from 'react-bootstrap/Modal';
import Link from "next/link";

export default function ToDo() {
    return (
        <div className="bg-slate-300">
            <div className = 'bg-slate-300 text-left flex justify-between'>
                <p className = 'text-2xl p-3 mb-0'><FiLogOut />logout</p>
                <Link className = 'no-underline text-black text-3xl p-3' href = '/add'>Add</Link>           
            </div>
            <div className = 'bg-slate-300 h-screen flex flex-col items-center'>
                <div className = 'bg-white w-2/4 h-full rounded-2xl mb-10 shadow-2xl'>
                    <h1 className = 'text-center text-2xl pt-2 pb-2 border-b-2'>My TODO List</h1>
                </div>
            </div>
        </div>
    )
}