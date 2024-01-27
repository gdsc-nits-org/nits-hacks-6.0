import React from "react";
import ReactDOM from "react-dom/client";
import { inject } from "@vercel/analytics";
import { injectSpeedInsights } from "@vercel/speed-insights";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.scss";
import App from "./App.jsx";
import Custom404 from "./Pages/404/404";
import Teams from "./Pages/TeamPage/Team";
import EventPage from "./Pages/EventPage/EventPage";

inject();
injectSpeedInsights();

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "*",
		element: <Custom404 />,
	},
	{
		path: "/Teams",
		element: <Teams />,
	},
	{
		path: "/event/:id",
		element: <EventPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
