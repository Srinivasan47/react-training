import react,{useEffect} from "react";
import { Outlet } from "react-router";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const AuthLayout = () => {
    useEffect(() => {
        // Check if the user is authenticated
        const isAuthenticated = localStorage.getItem("isAuthenticated");
        if (!isAuthenticated) {
            // Redirect to login page if not authenticated
            window.location.href = "/contact"; // Change this to your login page URL
        }
    }, []); // Empty dependency array to run only once on mount
  return (
    <div className="flex flex-col min-h-screen">
        <Header />
      <main className="flex-grow p-4">
        <Outlet />
      </main>
        <Footer />
    </div>
  );
}
export default AuthLayout;