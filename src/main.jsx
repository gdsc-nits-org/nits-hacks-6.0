import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Custom404 from "./Pages/404/404";
import EventPage from "./Pages/EventPage/EventPage";
// import Preview from "./Pages/Preview/Preview.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		// element: <Preview/>
		element: <App />,
	},
	{
		path: "*",
		element: <Custom404 />,
	},
	{
		path: "/event",
		element: <EventPage />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
