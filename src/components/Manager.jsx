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

    const getCredentials = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        setPasswordArray(passwords)
    }

    useEffect(() => {
        getCredentials()
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

    const savePassword = async () => {
        await fetch("http://localhost:3000/", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: form.id })
        })

        setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
        let res = await fetch("http://localhost:3000/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...form, id: uuidv4() })
        })
        setForm({
            site: "",
            username: "",
            password: "",
        })
    }

    const deletePassword = async (id) => {
        let del = confirm("Do you want to delete the credentials?")
        if (del) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))
            let res = await fetch("http://localhost:3000/", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id })
            })
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
        setForm({ ...passwordArray.filter(item => item.id === id)[0], id: id })
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
        <div className="min-h-screen bg-background pb-24">
            <ToastContainer position="top-right" theme="dark" />

            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="space-y-2 text-center mb-8">
                    <h1 className="text-4xl font-bold tracking-tight">
                        <span className="text-primary">&lt;</span>
                        KeyNest
                        <span className="text-primary">/&gt;</span>
                    </h1>
                    <p className="text-muted-foreground">Your secure password vault</p>
                </div>

                <div className="space-y-6 animate-in">
                    <div className="grid gap-4 max-w-lg mx-auto">
                        <div className="space-y-2">
                            <input
                                value={form.site}
                                name="site"
                                onChange={handleChange}
                                placeholder="Enter website URL"
                                className="w-full px-4 py-2 rounded-md border border-input bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                type="text"
                            />
                        </div>
                        <div className="space-y-2">
                            <input
                                value={form.username}
                                name="username"
                                onChange={handleChange}
                                placeholder="Enter username"
                                className="w-full px-4 py-2 rounded-md border border-input bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                                type="text"
                            />
                        </div>
                        <div className="relative">
                            <input
                                value={form.password}
                                name="password"
                                onChange={handleChange}
                                ref={passwordRef}
                                placeholder="Enter password"
                                type="password"
                                className="w-full px-4 py-2 rounded-md border border-input bg-secondary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                            />
                            <button
                                onClick={showPassword}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                <img
                                    ref={ref}
                                    className="w-5 h-5 opacity-75"
                                    src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png"
                                    alt="Toggle password visibility"
                                />
                            </button>
                        </div>
                        <button
                            onClick={savePassword}
                            className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-colors"
                        >
                            Add Password
                        </button>
                    </div>

                    <div className="mt-12 space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight">Saved Passwords</h2>
                        {passwordArray.length === 0 ? (
                            <p className="text-muted-foreground text-center py-8">No passwords saved yet</p>
                        ) : (
                            <div className="overflow-x-auto rounded-lg border border-border">
                                <table className="w-full">
                                    <thead className="bg-secondary">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Site</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Username</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Password</th>
                                            <th className="px-4 py-3 text-left text-sm font-medium text-muted-foreground">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {passwordArray.map((item, index) => (
                                            <tr key={item.id} className="border-t border-border hover:bg-secondary/50 transition-colors">
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-sm">{item.site}</span>
                                                        <button
                                                            onClick={() => copyText(item.site)}
                                                            className="p-1 rounded-md hover:bg-secondary"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-sm">{item.username}</span>
                                                        <button
                                                            onClick={() => copyText(item.username)}
                                                            className="p-1 rounded-md hover:bg-secondary"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center space-x-2">
                                                        <span className="text-sm font-mono">{"•".repeat(item.password.length)}</span>
                                                        <button
                                                            onClick={() => copyText(item.password)}
                                                            className="p-1 rounded-md hover:bg-secondary"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                                                                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center space-x-2">
                                                        <button
                                                            onClick={() => editPassword(item.id)}
                                                            className="p-1 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" /><path d="m15 5 4 4" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => deletePassword(item.id)}
                                                            className="p-1 rounded-md hover:bg-destructive/10 text-destructive transition-colors"
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                                <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager