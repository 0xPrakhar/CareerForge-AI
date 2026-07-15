import { Outlet, Link } from "react-router-dom";

export default function RootLayout() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/login">Login</Link> | 
          <Link to="/register">Register</Link>
        </nav>
      </header>

      <main>
        {/* This is where nested routes (Home, AuthLayout, etc.) will render */}
        <Outlet />
      </main>
    </div>
  );
}
