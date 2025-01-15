import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ChangePwPage from "./pages/ChangePasswordPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import { fetchCategory } from "./store/categorySlice";

function App() {
  const routes = [
    {
      path: "",
      element: () => <HomePage />,
    },
    {
      path: "login",
      element: () => <LoginPage />,
    },
    {
      path: "register",
      element: () => <RegisterPage />,
    },
    {
      path: "changepw",
      element: () => <ChangePwPage />,
    },
    {
      path: "search",
      element: () => <SearchPage />,
    },
    {
      path: "post/:slug",
      element: () => <PostDetailPage />,
    },
    // {
    //   path: "category/:slug",
    //   element: () => <CateogryPage />,
    // },
  ];

  // FE, VueJS
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, []);

  function showRoute(routes) {
    let xhtml = null;
    if (routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} element={route.element()} />
        );
      });
      return xhtml;
    }
  }

  return (
    <div className="wrapper-content">
      <Header />
      <Routes>{showRoute(routes)}</Routes>
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default App;
