/** @format */

import logo from "./logo.svg";
import "./App.css";
import Rawtext from "./Components/Rawtext";
import Markdownoutput from "./Components/Markdownoutput";

function App() {
	return (
		<div className="app">
			<Rawtext />
			<div className="vertical__line"></div>
			<Markdownoutput />
		</div>
	);
}

export default App;
