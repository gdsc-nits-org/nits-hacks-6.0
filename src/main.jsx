import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Custom404 from "./Pages/404/404";
import Teams from "./Pages/TeamPage/Team";
import { inject } from "@vercel/analytics";
import EventPage from "./Pages/EventPage/EventPage";

inject();

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
		element: <EventPage />
	}
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
