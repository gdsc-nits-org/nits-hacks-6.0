import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Preview from "./components/Preview/Preview.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Preview />,
	},
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/home",
				element: <Landing />,
			},
			{
				path: "/team",
				element: <Landing />,
			},
			{
				path: "/events",
				element: <Landing />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
