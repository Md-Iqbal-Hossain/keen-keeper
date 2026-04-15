import { createBrowserRouter } from "react-router";
import Homepage from "../pages/homepage/Homepage";
import RootLayout from '../layout/RootLayout'
import Friends from '../pages/friends/Friends'
import Timeline from '../pages/timeline/Timeline'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import FriendDetails from "../pages/friendDetails/FriendDetails";



export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
        loader: () => fetch('/friends.json')
      },
      {
        path: '/friends',
        element: <Friends />
      },
      {
        path: '/friends/:id',
        element: <FriendDetails />
      },
      {
        path: '/timeline',
        element: <Timeline />
      }
    ],
    errorElement: <NotFoundPage />
  },
]);