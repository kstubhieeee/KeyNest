import Logo from './Logo'

const Navbar = () => {
    return (
        <nav className="border-b border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex h-14 items-center">
                    <Logo />
                </div>
            </div>
        </nav>
    )
}

export default Navbar