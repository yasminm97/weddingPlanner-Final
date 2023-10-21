import PackageCard from "../components/PackageCards";
import Services from "../components/Services";

export default function Home() {
  return (
    <div className="home">
      <div className="column">
        <PackageCard />
        <Services />
      </div>
      <div className="about" style={{display: 'none'}}>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </div>
    </div>
  )
}
