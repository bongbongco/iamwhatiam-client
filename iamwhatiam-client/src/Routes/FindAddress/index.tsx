import { GoogleApiWrapper } from "google-maps-react";
import keys from "../../keys";
import FindAddressContainer from "./FindAddressContainer";

export default GoogleApiWrapper({
    apiKey: keys.google_map_api_key
})(FindAddressContainer);