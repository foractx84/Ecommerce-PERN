import { Outlet } from 'react-router-dom';
import TopPromoBar from "./TopPromoBar";
import Header from "./Header";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

function MainLayout() {
  return (
    <>
      <TopPromoBar />
      <Header />
      <main className="px-[135px]">
        <Outlet />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
}

export default MainLayout;