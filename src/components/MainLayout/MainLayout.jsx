import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Donation from "../Donation/Donation";
import Statistics from "../Statistics/Statistics";
import Details from "../Home/Details";
import ErrorPage from "../ErrorPage.jsx/ErrorPage";

const createdBrowser = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                loader: () => fetch('/donation_campaign.json'),
                element: <Home></Home>
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/donation-details/:id",
                loader: () => fetch('/donation_campaign.json'),
                element: <Details></Details>
            }
        ]
    }
]);

export default createdBrowser;