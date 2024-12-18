import Logo from './Logo'

const Footer = () => {
    return (
        <footer className="border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 fixed bottom-0 w-full">
            <div className="max-w-5xl mx-auto px-4 py-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <Logo />
                    <div className="text-sm text-muted-foreground">
                        Created with ❤️ by Kaustubh
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer