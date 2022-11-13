import { useState } from "react";
import Card from "./components/Card";
import Search from "./components/Search";
import "./assets/module/style.css";

function App() {
	const [info, setInfo] = useState("");

	return (
		<>
			<Search info={info} setInfo={setInfo} />
			<Card info={info} setInfo={setInfo} />
		</>
	);
}

export default App;
