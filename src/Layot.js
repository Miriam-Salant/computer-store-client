import { Outlet } from "react-router-dom"
import "./css/layot.css"

function Layout() {
    return (
        <>
            <header className="page">
                <nav>
                    <a href="/">בית</a>
                    <a href="/register">הרשמה</a>
                    <a href="/login">כניסה</a>
                    <a href="/manage-products">ניהול מוצרים</a>
                    <a href="/basket">סל קניות</a>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout