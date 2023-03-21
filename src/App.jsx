import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/applayout/Layout";
import SignIn from "./components/signin/SignIn";
import "../style/global.css";

function App() {
    return (
        <div className="App font-sans">
            <Router>
                <Routes>
                    <Route exact path="/" element={<SignIn />} />
                    <Route path="/home" element={<Layout />} />
                    {/* <Route path="/contact" component={Contact} /> */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;