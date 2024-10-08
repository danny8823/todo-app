import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export default function RegisterLayout({
    children,
}) {
    return (
        <div>
            <div className = 'bg-slate-100 h-0'>
               <Link href = '/'><FaArrowLeft className = 'text-3xl'/><span>Back</span></Link>
            </div>                   
            {children}
        </div>
    )
}