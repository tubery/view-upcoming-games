import Footer from "./layout/Footer";
import MainContent from "./layout/MainContent";
import Header from "./layout/Header";
import "./index.css";

function App() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<MainContent />
			<Footer />
		</div>
	);
}

export default App;
