import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="flex gap-4 p-4 border-b">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/project">Project</Link>
            <Link href="/contact">Contact</Link>
        </nav>
    )
}

export default Navbar;