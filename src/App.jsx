import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PostDetailPage from "./pages/PostDetailPage";
import RegisterPage from "./pages/RegisterPage";
import SearchPage from "./pages/SearchPage";
import { actGetCategory } from "./store/category/actions";
import ChangePwPage from "./pages/ChangePasswordPage";

function App() {
  dayjs.extend(window.dayjs_plugin_relativeTime);
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
  ];

  // const routes = createBrowserRouter (
  //   [
  //     {
  //       path: "/",
  //       element: () => <HomePage />,
  //     },
  //     {
  //       path: "login",
  //       element: () => <LoginPage />,
  //     },
  //     {
  //       path: "register",
  //       element: () => <RegisterPage />,
  //     },
  //     {
  //       path: "search",
  //       element: () => <SearchPage />,
  //     },
  //     {
  //       path: "post/:slug",
  //       element: () => <PostDetailPage />,
  //     },
  //   ],
  //   {
  //     future: {
  //       v7_fetcherPersist: true,
  //       v7_normalizeFormMethod: true,
  //       v7_partialHydration: true,
  //       v7_relativeSplatPath: true,
  //       v7_skipActionErrorRevalidation: true,
  //       v7_startTransition: true,
  //     }
  //   }
  // );

  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      "https://wp-api.codethanhthuongthua.asia/wp-json/wp/v2/categories?per_page=100&page=1&lang=vi"
    )
      .then((res) => res.json())
      .then((result) => {
        dispatch(actGetCategory(result));
      });
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
      {/* <RouterProvider 
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
        router={showRoute(routes)}
      /> */}
      <div className="spacing" />
      <Footer />
    </div>
  );
}

export default App;
