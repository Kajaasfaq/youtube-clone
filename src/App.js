import "./App.css"
import Body from "./components/Body";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContianer from "./components/MainContianer";
import Watchpage from "./components/Watchpage";

const AppRouter = createBrowserRouter([
  {

    path : "/" ,
    element : <Body/>,
    children : [
      {
        path: "/",
        element : <MainContianer />
      },{
        path : "/watch",
        element : <Watchpage />
      }
    ],
  }
  
])

function App() {
  return (
    <Provider store={store}>
      < Head />
      < RouterProvider router={AppRouter} >
        < Body />
      </RouterProvider>
     </Provider>
    );
}

export default App;
