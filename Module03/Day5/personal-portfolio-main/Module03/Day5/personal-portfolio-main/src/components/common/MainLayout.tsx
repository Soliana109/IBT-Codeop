import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="pt-24">
        <Outlet /> {/* Pages will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;