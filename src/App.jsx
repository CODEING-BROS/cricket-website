import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Form from './components/Form'; 
import TournamentFormats from './components/TournamentFormats';
import Footer from './components/Footer';
import TournamentPage from './components/TournamentPage'; 
import './index.css';
import './Responsive.css'
import BackgroundPage from './components/BackgroundPage';
import JoinUsPage from './components/JoinUsPage';
import AboutPage from './components/AboutPage'; 

const App = () => {
  return (
    <Router>
      <div className="main-content">
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={
              <>
                <Home/>
                <TournamentFormats/> 
                <BackgroundPage/>
                <JoinUsPage/>
              </>
            }
          />

          {/* Form route with Header and Footer */}
          <Route
            path="/form"
            element={
              <>
                <Header /> 
                <Form />
              </>
            }
          />

          {/* Tournament page with Header and Footer */}
          <Route
            path="/tournaments"
            element={
              <>
                <Header />
                <TournamentPage />
              </>
            }
          />

          {/* About page with Header and Footer */}
          <Route
            path="/about"
            element={
              <>
                <Header />
                <AboutPage /> 
              </>
            }
          />
        </Routes>
      </div>
      <Footer /> 
    </Router>
  );
};

export default App;
