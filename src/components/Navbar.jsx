const Navbar = () => {
    return (
        <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex h-14 items-center">
                    <div className="font-bold text-xl">
                        <span className="text-primary">&lt;</span>
                        KeyNest
                        <span className="text-primary">/&gt;</span>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar