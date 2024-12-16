/* eslint-disable no-unused-vars */
import React, { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Manager = () => {

    const ref = useRef()

    const passwordRef = useRef()

    const [passwordArray, setPasswordArray] = useState([])


    useEffect(() => {
        let passwords = localStorage.getItem("passwords")
        if (passwords) {
            setPasswordArray(JSON.parse(passwords))
        }
    }, [])

    const [form, setForm] = useState({
        site: "",
        username: "",
        password: "",
    })

    const showPassword = () => {
        if (ref.current.src === "https://www.svgrepo.com/show/348139/eye-crossed.svg") {
            ref.current.src = "https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png"
            passwordRef.current.type = "password"
        } else {
            ref.current.src = "https://www.svgrepo.com/show/348139/eye-crossed.svg"
            passwordRef.current.type = "text"

        }
    }

    const savePassword = () => {
        setPasswordArray([...passwordArray, form])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, form]))
        console.log(passwordArray);
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <div
                className="absolute inset-0 -z-10 h-full w-full bg-white 
         bg-[linear-gradient(to_right, #8080800a_1px, transparent_1px), 
             linear-gradient(to_bottom, #8080800a_1px, transparent_1px)] 
         bg-[size:14px_24px]"
            >
                <div
                    className="absolute left-0 right-0 top-0 -z-10 m-auto 
           h-[310px] w-[310px] rounded-full bg-green-400 
           opacity-20 blur-[100px]"
                >
                </div>
            </div>

            <div className="mx-auto bg-green-50 container px-40">
                <h1 className='text-4xl text font-bold text-center'>
                    <span className='text-green-500'> &lt;</span>

                    <span>Pass</span><span className='text-green-500'>OP/&gt;</span>

                </h1>
                <p className='text-green-900 text-lg text-center'>Your own Password Manager</p>

                <div className="flex flex-col p-4 text-black gap-8 items-center">


                    {/* Website name */}

                    <input value={form.site} name="site" onChange={handleChange} placeholder='Enter website URL' className="rounded-full border border-green-500 w-full p-4 py-1" type="text" id="" />

                    <div className="flex flex-col p-4 text-black gap-8 items-center">

                        {/* username */}

                        <input value={form.username} name="username" onChange={handleChange} placeholder='Enter username' type="text" className="rounded-full border border-green-500 w-full p-4 py-1" />
                        <div className="relative">


                            {/* password */}

                            <input value={form.password} name="password" onChange={handleChange} ref={passwordRef} placeholder='Enter password' type="password" className="rounded-full border border-green-500 w-full p-4 py-1" />
                            <span className="absolute right-[3px] top-[4px] cursor-pointer">
                                <img ref={ref} className='p-1' onClick={showPassword} width={26} src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png" alt="eye" />
                            </span>
                        </div>

                        {/* submit button */}


                        <button onClick={savePassword} className="className='flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900'">
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover" >
                            </lord-icon>
                            Add Password</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Manager
