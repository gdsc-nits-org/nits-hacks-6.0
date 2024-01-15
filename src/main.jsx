import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Custom404 from "./Pages/404/404";
import Teams from "./Pages/TeamPage/Team"
// import Home from "./Home.jsx";
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
		path: "/Teams",
		element: <Teams />

	},
	//   {
	//     path: "/home",
	//     element: <Home />,
	//   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
