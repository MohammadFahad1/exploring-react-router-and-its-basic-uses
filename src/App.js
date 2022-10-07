import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Friends from './components/Friends/Friends';
import Home from './components/Home/Home';
import PostDetails from './components/PostDetails/PostDetails';
import Posts from './components/Posts/Posts';
import Products from './components/Products/Products';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, children: [
        { path: '/', element: <Home></Home> },
        { path: '/about', element: <About></About> },
        { path: '/products', element: <Products></Products> },
        {
          path: '/friends', element: <Friends></Friends>, loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          }
        },
        {
          path: '/posts', element: <Posts></Posts>, loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
        },
        {
          path: 'post/:postId',
          element: <PostDetails></PostDetails>,
          loader: ({ params }) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        {
          path: '/friend/:friendId', element: <FriendDetails></FriendDetails>, loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`);
          }
        },
        { path: '*', element: <h1>404 Not Found</h1> }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
