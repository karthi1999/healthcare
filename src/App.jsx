import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/applayout/Layout";
import SignIn from "./components/signin/SignIn";

function App() {
    return (
        <div className="App">
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