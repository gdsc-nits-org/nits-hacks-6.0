// import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
// import Home from "./Home.jsx";
// import Preview from "./Pages/Preview/Preview.jsx";

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		// element: <Preview/>
// 		element: <App />,
// 	},
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
);
