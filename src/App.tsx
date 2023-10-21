import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Registration from './pages/Registration'
import Packages from './pages/Packages';
import Profile from './pages/Profile';
import SearchPage from './pages/SearchPage';
import ServiceProviderInfo from './pages/ServiceProviderInfo';
import Favorites  from './pages/Favorites';
import NavBar  from './components/NavBar';
import ServicesPage from './pages/ServicesPage';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Registration />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/service-provider-info/:id" element={<ServiceProviderInfo />} />
        <Route path="/services-page/:title" element={<ServicesPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/service" element={<ServiceProviderInfo />} />
      </Routes>
    </>
  )
}

export default App;
