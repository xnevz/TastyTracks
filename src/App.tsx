import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    },
]);

function App() {
    return (
        <>
            <ConfigProvider>
                <RouterProvider router={router} />
            </ConfigProvider>
        </>
    );
}

export default App;
