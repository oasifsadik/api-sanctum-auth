import { Link, Outlet } from "react-router-dom"
export default function Layout(){
    return(
        <>
        <header className="bg-slate-800 shadow-md py-4">
            <nav className="max-w-screen-lg mx-auto flex items-center justify-between px-5">
                <Link to="/" className="nav-link text-white hover:text-blue-400 transition duration-200">Home</Link>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>
        </>
    )
}
