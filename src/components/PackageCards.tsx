import { useNavigate } from 'react-router-dom';

const PackageCards = () => {
  const navigate = useNavigate();
  return (
    <div className="packages-container">
    <div className="package-cards-container">
      <div className="package-card">
        <img
          src="src/assets/Packages.png" 
          alt="Package 1"
          className="package-image"
          onClick={()=>navigate('/packages')}
        />
      </div>
      <div className="package-card">
        <img
          src="src/assets/Packages.png" 
          alt="Package 3"
          className="package-image"
          onClick={()=>navigate('/packages')}
        />
      </div>
      <div className="package-card">
        <img
          src="src/assets/Packages.png" 
          alt="Package 2"
          className="package-image"
          onClick={()=>navigate('/packages')}
        />
      </div>
    </div>
    </div>
  );
};

export default PackageCards;
