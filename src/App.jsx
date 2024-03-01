
import Home from "./pages/Home.jsx"
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home/>} />
    )
)
export default function App() {
    return (
        <RouterProvider router={router} />
    )
}