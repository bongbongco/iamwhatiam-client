import { GoogleApiWrapper } from "google-maps-react";
import keys from "../../keys";
import HomeContainer from "./HomeContainer";

export default GoogleApiWrapper({
    apiKey: keys.google_map_api_key
})(HomeContainer);