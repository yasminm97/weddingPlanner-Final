import SProviderInfo from "../components/SProviderInfo";
import { useParams } from "react-router-dom";
import providers from "../api/providers.json"

export default function ServiceProviderInfo() {
  const {id} = useParams();
  const wantedProv = providers.find((element:any) => element.id == id)

  return (
    <>
        <SProviderInfo provider={wantedProv}/>
    </>
  )
}
