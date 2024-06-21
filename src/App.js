import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import React from "react";
import Store from "./Redux/Store";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import SearchScreen from "./components/SearchScreen";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Body />
      </>
    ),
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },

      {
        path: "watch",
        element: <WatchPage />,
      },
      {
        path: "/search/:query",
        element: <SearchScreen />,
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={Store}>
      <div className="app">
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
