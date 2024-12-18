import { useRef } from 'react'

const PasswordForm = ({ form, handleChange, savePassword }) => {
  const passwordRef = useRef()
  const eyeIconRef = useRef()

  const togglePassword = () => {
    if (eyeIconRef.current.src === "https://www.svgrepo.com/show/348139/eye-crossed.svg") {
      eyeIconRef.current.src = "https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png"
      passwordRef.current.type = "password"
    } else {
      eyeIconRef.current.src = "https://www.svgrepo.com/show/348139/eye-crossed.svg"
      passwordRef.current.type = "text"
    }
  }

  return (
    <div className="grid gap-4 max-w-lg mx-auto bg-secondary/30 p-6 rounded-xl border border-border/50">
      <div className="space-y-2">
        <input
          value={form.site}
          name="site"
          onChange={handleChange}
          placeholder="Enter website URL"
          className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
          type="text"
        />
      </div>
      <div className="space-y-2">
        <input
          value={form.username}
          name="username"
          onChange={handleChange}
          placeholder="Enter username"
          className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
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
          className="w-full px-4 py-2.5 rounded-lg border border-border/50 bg-secondary/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200"
        />
        <button
          onClick={togglePassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 rounded-md hover:bg-secondary"
        >
          <img
            ref={eyeIconRef}
            className="w-5 h-5 opacity-75"
            src="https://www.freeiconspng.com/thumbs/eye-icon/eyeball-icon-png-eye-icon-1.png"
            alt="Toggle password visibility"
          />
        </button>
      </div>
      <button
        onClick={savePassword}
        className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg font-medium bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all duration-200 shadow-lg shadow-primary/25"
      >
        Add Password
      </button>
    </div>
  )
}

export default PasswordForm