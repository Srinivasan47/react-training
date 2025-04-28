import react from "react";
import { Outlet } from "react-router";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

const MainLayout = ({ children }) => {
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
export default MainLayout;