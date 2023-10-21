
interface Works {
  works: string[];
}
const Works : React.FC<Works> = ({ works }) => {
  return (
    <div className="packages-container">
    <div className="package-cards-container">
      {
        works.map((work,i)=>(
          <div key={i} className="package-card">
          <img
            src={work} 
            alt="Package 1"
            className="package-image"
          />
        </div>
        ))
      }
    </div>
    </div>
  );
};

export default Works;
