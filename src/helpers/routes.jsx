import Html from "../pages/Html";
import Index from "../pages/Index";

export const routes = [
    {
        path: "/",
        element: <Index/>
    },

    {
        path: "/html",
        element: <Html/>
    }
]