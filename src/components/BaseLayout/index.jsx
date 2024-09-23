import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const BaseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
