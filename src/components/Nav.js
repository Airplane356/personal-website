import Link from 'next/link';

import ThemeToggle from "../components/ThemeToggle";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center mx-auto mt-[50px] max-w-[600px] px-4">
            {/* Left side - links */}
            <div className="flex gap-10">
                <Link href="/">
                <span className="nav-text-colour">Home</span>
                </Link>
                <Link href="/experiences">
                <span className="nav-text-colour">Experiences</span>
                </Link>
                <Link href="/projects">
                <span className="nav-text-colour">Projects</span>
                </Link>
            </div>

            {/* Right side - toggle */}
            <ThemeToggle />
        </nav>

    )
}