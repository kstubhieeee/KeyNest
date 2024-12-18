/* eslint-disable no-unused-vars */
import React, { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';

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
        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, { ...form, id: uuidv4() }]))
        // console.log(passwordArray);
        setForm({
            site: "",
            username: "",
            password: "",
        })
    }

    const deletePassword = (id) => {
        // console.log(id);
        let del = confirm("Do you want to delete the credentials ?")
        if (del) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item => item.id !== id)))
            toast('Credentials deleted', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    const editPassword = (id) => {
        // console.log(id);
        setForm(passwordArray.filter(item => item.id === id)[0])
        setPasswordArray(passwordArray.filter(item => item.id !== id))

    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast('Copied to clipboard', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        navigator.clipboard.writeText(text);

    }

    return (

        <div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"

            />
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

                    <span>KeyNest</span><span className='text-green-500'>/&gt;</span>

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


                        <button onClick={savePassword} className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit border border-green-900">
                            <lord-icon
                                src="https://cdn.lordicon.com/jgnvfzqg.json"
                                trigger="hover" >
                            </lord-icon>
                            Add Password</button>
                    </div>
                </div>
                <div className="passwords">
                    <h2 className="font-bold text-2xl py-4">Passwords</h2>
                    {passwordArray.length === 0 && <div>No passwords to show</div>}
                    {passwordArray.length !== 0 &&
                        <table className="mb-4 table-auto w-full overflow-hidden rounded-lg">
                            <thead className="bg-green-800 text-white">
                                <tr>
                                    <th className="px-4 py-2">Site</th>
                                    <th className="px-4 py-2">Username</th>
                                    <th className="px-4 py-2">Passwords</th>
                                    <th className="px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-green-100">
                                {passwordArray.map((item, position) => {
                                    return (
                                        <tr key={position}>
                                            <td className="text-center border-white w-32 border px-4 py-2">
                                                <div className="flex items-center justify-center">

                                                    <span>{item.site}</span>
                                                    <div className='size-7 cursor-pointer' onClick={() => { copyText(item.site) }}>
                                                        <img
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", "marginLeft": "10px" }}
                                                            src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center border-white w-32 border px-4 py-2">
                                                <div className="flex items-center justify-center">

                                                    <span>{item.username}</span>
                                                    <div className='size-7 cursor-pointer' onClick={() => { copyText(item.username) }}>
                                                        <img
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", "marginLeft": "10px" }}
                                                            src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center border-white w-32 border px-4 py-2">
                                                <div className="flex items-center justify-center">

                                                    <span>{item.password}</span>
                                                    <div className='size-7 cursor-pointer' onClick={() => { copyText(item.password) }}>
                                                        <img
                                                            style={{ "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", "marginLeft": "10px" }}
                                                            src="https://cdn-icons-png.flaticon.com/512/1621/1621635.png"
                                                            alt="" />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-center border-white w-32 border px-4 py-2">
                                                <div className="flex items-center justify-center">
                                                    <div className='size-7 cursor-pointer' >
                                                        <img
                                                            style={{ "mixBlendMode": "multiply", "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", "marginLeft": "10px" }}
                                                            src="https://e7.pngegg.com/pngimages/461/1024/png-clipart-computer-icons-editing-edit-icon-cdr-angle-thumbnail.png"
                                                            alt=""
                                                            onClick={() => {
                                                                editPassword(item.id)
                                                            }}
                                                        />
                                                    </div>
                                                    <div className='size-7 cursor-pointer' >
                                                        <img
                                                            style={{ "mixBlendMode": "multiply", "width": "25px", "height": "25px", "paddingTop": "3px", "paddingLeft": "3px", "marginLeft": "15px" }}
                                                            src="https://w7.pngwing.com/pngs/29/45/png-transparent-delete-key-logo-button-text-rectangle-logo-thumbnail.png"
                                                            alt=""
                                                            onClick={() => {
                                                                deletePassword(item.id)
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>
                                    );
                                })}


                            </tbody>
                        </table>}
                </div>
            </div>

        </div>
    )
}

export default Manager
