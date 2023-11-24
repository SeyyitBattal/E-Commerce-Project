import { ToastContainer } from "react-toastify";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PageBody } from "./PageBody";

export const Main = () => {
  return (
    <div>
      <Header />
      <PageBody />
      <Footer />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
