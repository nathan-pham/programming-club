const Navigation = () => {
    return (
        <header className="flex justify-between items-center p-3 md:px-12 md:py-8 text-white">
            <h1>Programming Club</h1>
            <nav className="hidden md:flex gap-6">
                <a
                    href="https://docs.google.com/document/d/1sewyveyipqMEsOiamNL56eCNfnUk5K1j7J3xZhvmkzY/edit?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                >
                    Calendar
                </a>
                <a>Resources</a>
                <a>FAQ</a>
            </nav>
        </header>
    );
};

export default Navigation;
