import { useEffect, useState } from "react"
import { ToastContainer } from 'react-toastify';
import { v4 as uuidv4 } from 'uuid';
import PasswordForm from "./PasswordForm"
import PasswordTable from "./PasswordTable"
import { showToast } from "../utils/toast"

const Manager = () => {
    const [passwordArray, setPasswordArray] = useState([])
    const [form, setForm] = useState({
        site: "",
        username: "",
        password: "",
    })

    const getCredentials = async () => {
        try {
            let req = await fetch("http://localhost:3000/")
            let passwords = await req.json()
            setPasswordArray(passwords)
        } catch (error) {
            showToast('Failed to fetch credentials', 'error')
        }
    }

    useEffect(() => {
        getCredentials()
    }, [])

    const savePassword = async () => {
        try {
            if (!form.site || !form.username || !form.password) {
                showToast('Please fill in all fields', 'warning')
                return
            }

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
            
            if (res.ok) {
                showToast('Credentials saved successfully', 'success')
                setForm({ site: "", username: "", password: "" })
            }
        } catch (error) {
            showToast('Failed to save credentials', 'error')
        }
    }

    const deletePassword = async (id) => {
        try {
            let del = confirm("Do you want to delete the credentials?")
            if (del) {
                setPasswordArray(passwordArray.filter(item => item.id !== id))
                let res = await fetch("http://localhost:3000/", {
                    method: "DELETE",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ id })
                })
                if (res.ok) {
                    showToast('Credentials deleted successfully', 'success')
                }
            }
        } catch (error) {
            showToast('Failed to delete credentials', 'error')
        }
    }

    const editPassword = (id) => {
        setForm({ ...passwordArray.filter(item => item.id === id)[0], id: id })
        setPasswordArray(passwordArray.filter(item => item.id !== id))
        showToast('Editing credentials', 'info')
    }

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        navigator.clipboard.writeText(text)
        showToast('Copied to clipboard', 'success')
    }

    return (
        <div className="min-h-screen bg-background pb-24">
            <ToastContainer position="top-right" theme="dark" />
            
            <div className="max-w-5xl mx-auto px-4 py-8">
                <div className="space-y-2 text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight">Secure Password Manager</h1>
                    <p className="text-muted-foreground">Store and manage your credentials safely</p>
                </div>

                <div className="space-y-12 animate-in">
                    <PasswordForm 
                        form={form}
                        handleChange={handleChange}
                        savePassword={savePassword}
                    />

                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold tracking-tight">Saved Passwords</h2>
                        <PasswordTable 
                            passwordArray={passwordArray}
                            copyText={copyText}
                            editPassword={editPassword}
                            deletePassword={deletePassword}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Manager