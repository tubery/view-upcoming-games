import Footer from "./layout/Footer";
import MainContent from "./layout/MainContent";
import Header from "./layout/Header";
import "./index.css";
import { GameProvider } from "./context/GamesContext";

function App() {
	return (
		<GameProvider>
			<div className="flex flex-col min-h-screen">
				<Header />
				<MainContent />
				<Footer />
			</div>
		</GameProvider>
	);
}

export default App;
