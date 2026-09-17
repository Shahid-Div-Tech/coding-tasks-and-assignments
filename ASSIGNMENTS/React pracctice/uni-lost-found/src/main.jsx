import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import LostItems from "./components/LostItems.jsx";
import FoundItems from "./components/FoundItems.jsx";
import UserProfile from "./components/UserProfile.jsx";
import CreatePost from "./components/CreatePost.jsx";
import {Provider} from "react-redux"
import {store} from "./store/store.js"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <Home/>,
      },
      {
        path: "contact",
        element: <Contact/>
      },
      {
        path: "login",
        element: <Login/>
      },

      {
        path: "signup",
        element: <SignUp/>
      },

      
      {
        path: "contact",
        element: <Contact/>
      },

      {
        path:"profile",
        element:<ProtectedRoute>
          <Profile/>
        </ProtectedRoute>,
        children:[
        {
          index:true,
          element:<LostItems/>
        },
         {
          path:"founditems",
          element:<FoundItems/>
        },
         {
          path:"userProfile",
          element:<UserProfile/>
        },
         {
          path:"createpost",
          element:<CreatePost/>
        }
        ]
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);