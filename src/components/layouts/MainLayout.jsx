import TopPromoBar from "./TopPromoBar";
import Header from "./Header";
import Footer from "./Footer";
import BottomBar from "./BottomBar";

function MainLayout({ children }) {
  return (
    <>
      <TopPromoBar />
      <Header />
      <main className="px-[135px]">{children}</main>
      <Footer />
      <BottomBar />
    </>
  );
}

export default MainLayout;