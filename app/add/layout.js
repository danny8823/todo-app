import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function AddLayout({
    children,
}) {
    return (
        <div>
            <div className = 'bg-slate-100 h-0'>
               <Link className = 'no-underline text-black' href = '/todo'><FaArrowLeft className = 'text-3xl'/>Back</Link>
            </div>                   
            {children}
        </div>
    )
}