const Logo = () => {
  return (
    <div className="font-bold text-xl relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/0 rounded-lg blur opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="relative">
        <span className="text-primary font-mono">&lt;</span>
        <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Key</span>
        <span className="bg-gradient-to-r from-primary/80 to-primary/60 bg-clip-text text-transparent">Nest</span>
        <span className="text-primary font-mono">/&gt;</span>
      </div>
    </div>
  )
}

export default Logo