const PasswordTable = ({ passwordArray, copyText, editPassword, deletePassword }) => {
  if (passwordArray.length === 0) {
    return (
      <div className="text-center py-12 bg-secondary/30 rounded-xl border border-border/50">
        <div className="text-4xl mb-3">🔐</div>
        <p className="text-muted-foreground">No passwords saved yet</p>
      </div>
    )
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border/50 bg-secondary/30">
      <table className="w-full">
        <thead className="bg-secondary/50">
          <tr>
            <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">Site</th>
            <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">Username</th>
            <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">Password</th>
            <th className="px-4 py-3.5 text-left text-sm font-medium text-muted-foreground">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border/50">
          {passwordArray.map((item) => (
            <tr key={item.id} className="group hover:bg-secondary/50 transition-colors duration-200">
              <td className="px-4 py-3.5">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{item.site}</span>
                  <button
                    onClick={() => copyText(item.site)}
                    className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-4 py-3.5">
                <div className="flex items-center space-x-2">
                  <span className="text-sm">{item.username}</span>
                  <button
                    onClick={() => copyText(item.username)}
                    className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-4 py-3.5">
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-mono tracking-wider">{"•".repeat(item.password.length)}</span>
                  <button
                    onClick={() => copyText(item.password)}
                    className="p-1.5 rounded-md opacity-0 group-hover:opacity-100 hover:bg-secondary transition-all duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground hover:text-foreground transition-colors">
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                  </button>
                </div>
              </td>
              <td className="px-4 py-3.5">
                <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-200">
                  <button
                    onClick={() => editPassword(item.id)}
                    className="p-1.5 rounded-md hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => deletePassword(item.id)}
                    className="p-1.5 rounded-md hover:bg-destructive/10 text-destructive transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PasswordTable