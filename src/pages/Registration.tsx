import RegistrationForm from '../components/RegistrationForm'
import { useNavigate } from 'react-router-dom'
export default function Registration() {
    const navigate = useNavigate();

  return (
    <div className="registration m-auto">
        <RegistrationForm onSubmit={()=>navigate('/home')}/>
    </div>
  )
}
