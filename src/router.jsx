
import { createBrowserRouter } from "react-router";
import Home from './React-Router/Home.jsx'
import About from './React-Router/About.jsx'
import Contact from './React-Router/Contact.jsx'
import Profile from './React-Router/Profile.jsx'
import NotFound from './React-Router/NotFound.jsx'
import ProfileDetail from './React-Router/ProfileDetail.jsx'

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },{
    path: "/profile/:id",
    element: <ProfileDetail />,
  },{
    path: "*",
    element: <NotFound />,
  }
]);

export default router