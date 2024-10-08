'use client'

import { Button } from "react-bootstrap"

export default function Add() {
    return(
        <div className = 'bg-slate-300 h-screen w-screen flex justify-center items-center'>
            <form className = 'bg-white flex flex-col w-1/2 h-1/2 p-4 rounded-3xl'>
                <label
                    className = 'text-4xl'
                >Task:</label>
                <input
                    className = 'bg-slate-300 text-3xl rounded-lg m-2 p-2'
                    placeholder="Task name"/>
                <label
                    className = 'text-4xl'
                >Description:</label>
                <input
                    className= 'bg-slate-300 text-3xl rounded-lg m-2 p-2'
                    placeholder="Description"/>
                <button 
                    className = 'bg-blue-600 text-2xl w-2/3 h-12 rounded-lg m-auto'>Submit</button>
             </form>
        </div>
    )
}