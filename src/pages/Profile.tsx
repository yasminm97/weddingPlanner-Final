import { useLocation, useSearchParams } from "react-router-dom";
import SProviderProfile from "../components/SProviderProfile";
import UserProfile from "../components/UserProfile"


const user = {
  firstName:'Ali',
  lastName:'Ahmed',
  phone:'09239r8297584',
  email:'shdrvfhsr@email.com',
}
export default function Profile() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tag = queryParams.get('tag');

  return (
    <div className="profile"> 
      {
        (tag==='palnner') ? (
          <SProviderProfile user={user} />
        ) :(
          <UserProfile user={user} />
        )
      }      
    </div>
  )
}
