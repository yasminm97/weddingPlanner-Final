import { useParams } from "react-router-dom";
import providers from "../api/providers.json"
import ServicesList from "../components/ServicesList";

export default function ServicesPage() {
  const {title} = useParams();
  const wantedService = providers.find((element:any) => element.title == title)

  return (
    <>
        <ServicesList provider={wantedService}/>
    </>
  )
}