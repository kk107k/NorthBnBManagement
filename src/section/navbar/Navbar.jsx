import React, { useState, useEffect } from 'react';
import '../../motion.css';
import './navbar.css';
import image from '../../assets/northbnb_logo.png';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import applyScrollEffect from '../../utils/scrollEffect'; // Import the scroll effect



const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const options = [
    'About us',
    'ContactUs',
    'CustomerSupport',
    'HouseCleaning',
    'Maintenance',
    'OccupancyRate',
    'PremiumHosting',
    'Services',
    'Team',
    'What',
    'Why',
  ];

  useEffect(() => {
    // Apply the scroll effect
    const cleanupScrollEffect = applyScrollEffect();

    // Cleanup the scroll effect when the component unmounts
    return () => {
      cleanupScrollEffect();
    };
  }, []); // Empty dependency array ensures the effect runs only once, similar to componentDidMount

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    // Find the closest matches based on the query
    const closestMatches = findClosestMatches(e.target.value);

    // Display the nearest three matches
    setSearchResults(closestMatches.slice(0, 3));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }
    if (searchQuery.toLowerCase() === 'home') {
      navigate(`/`);
    } else {
      const closestMatch = findClosestMatch(searchQuery);

      if (closestMatch) {
        navigate(`/${closestMatch.toLowerCase()}`);
      } else {
        navigate(`/`);
      }
    }
  };

  const findClosestMatch = (query) => {
    const lowercaseQuery = query.toLowerCase();
    let bestMatch = null;
    let bestMatchScore = -1;

    for (const option of options) {
      const lowercaseOption = option.toLowerCase();
      let score = 0;

      for (let i = 0; i < lowercaseQuery.length; i++) {
        if (lowercaseOption.startsWith(lowercaseQuery.slice(0, i + 1))) {
          score = i + 1;
        } else {
          break;
        }
      }

      if (score > bestMatchScore) {
        bestMatch = option;
        bestMatchScore = score;
      }
    }

    return bestMatch;
  };

  const findClosestMatches = (query) => {
    const lowercaseQuery = query.toLowerCase();

    // Sort options by their similarity to the query
    const sortedOptions = options.slice().sort((a, b) => {
      const similarityA = calculateSimilarity(lowercaseQuery, a.toLowerCase());
      const similarityB = calculateSimilarity(lowercaseQuery, b.toLowerCase());
      return similarityB - similarityA;
    });

    return sortedOptions;
  };

  const calculateSimilarity = (query, option) => {
    let score = 0;

    for (let i = 0; i < query.length; i++) {
      if (option.startsWith(query.slice(0, i + 1))) {
        score = i + 1;
      } else {
        break;
      }
    }

    return score;
  };

  
  return (
    <div className={"wrapper fadeDown"}>
      <nav>
        <input type="checkbox" id="show-search" name="show-search" />
        <input type="checkbox" id="show-menu" name="show-menu" />
        <label htmlFor="show-menu" className="menu-icon">
          <i className="fas fa-bars"></i>
        </label>
        <div className="content">
          <div className="logo">
            <Link to="/">
              <img src={image} alt="" />
            </Link>
          </div>
          <ul className="links">
            <li>
              <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
                Home
              </Link>
            </li>
            <li>
              <Link className="desktop-link">
                Services <i class="fa-solid fa-chevron-down" style={{color: "white"}}></i>
              </Link>
              <input type="checkbox" id="show-features" name="show-features" />
              <label htmlFor="show-features">Services <i class="fa-solid fa-chevron-down" style={{color: "white"}}></i></label>
              <ul>
                <li className='dropdown'>
                  <Link to="/houseCleaning" className={location.pathname === '/houseCleaning' ? 'active' : ''}>
                    House Cleaning
                  </Link>
                  <Link to="/maintenance" className={location.pathname === '/maintenance' ? 'active' : ''}>
                    Maintenance
                  </Link>
                  <Link to="/occupancyRate" className={location.pathname === '/occupancyRate' ? 'active' : ''}>
                    Occupancy Rate
                  </Link>
                  <Link to="/premiumHosting" className={location.pathname === '/premiumHosting' ? 'active' : ''}>
                    Premium Hosting
                  </Link>
                  <Link to="/customerSupport" className={location.pathname === '/customerSupport' ? 'active' : ''}>
                    Customer Support
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/AboutUs" className={location.pathname === '/AboutUs' ? 'active' : ''}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contactUs" className={location.pathname === '/contactUs' ? 'active' : ''}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>
                Team
              </Link>
            </li>
          </ul>
        </div>
        <label htmlFor="show-search" className="search-icon">
          <i className="fas fa-search" style={{color: "white",}}></i>
        </label>
        <form className="search-box" onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder="Type Something to Search..."
            required
            value={searchQuery}
            onChange={handleSearch}
          />
          <button type="submit" className="go-icon">
            <i className="fas fa-long-arrow-alt-right"></i>
          </button>
          {searchResults.length > 0 && (
          <div className="search-results">
            <ul>
              {searchResults.map((result) => (
                 <Link to={`/${result.toLowerCase()}`}><li key={result}>
                 {result}
                </li></Link>
              ))}
            </ul>
          </div>
        )}
        </form>
        
      </nav>
    </div>
  );
};

export default Navbar;
