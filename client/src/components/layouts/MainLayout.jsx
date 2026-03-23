import TopPromoBar from './TopPromoBar';
import Navbar from './Navbar';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#f5e8d8] text-black">
      <TopPromoBar />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;