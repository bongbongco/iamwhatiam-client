import { GoogleApiWrapper } from "google-maps-react";
import keys from "../../keys";
import HavrutaContainer from "./HavrutaContainer";

export default GoogleApiWrapper({
    apiKey: keys.google_map_api_key
})(HavrutaContainer);