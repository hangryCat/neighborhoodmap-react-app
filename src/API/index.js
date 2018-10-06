// This helper class has a baseURL function that returns the base URL that is used often
// Won't have to type out the same URL; just need to add on to it
class Helper {
  static baseURL() {
    return "http://api.foursquare.com/v2";
  }

  static auth() {
    const clientKeys = {
      client_id: 'HGDYIWSS0FUEOPKOBZISUXYROHPNASRXN54EJDVE0XAQZO12',
      client_secret: 'JXZYMNLQADTJJDYQDYDAQMAOBIOFFT01P0YLHH32SWBRUFX1',
      version_parameter: '20181005'
    };
    // Object.keys(keys) returns an array with each value turned into strings
    // The map() returns an array with the property names' values into strings
    // The join() concatenate the array
    // Output:  "client_id=HGDYIWSS0FUEOPKOBZISUXYROHPNASRXN54EJDVE0XAQZO12&client_secret=JXZYMNLQADTJJDYQDYDAQMAOBIOFFT01P0YLHH32SWBRUFX1&version_parameter=20181005"
    return Object.keys(clientKeys)
      .map(key => `${key}=${clientKeys[key]}`)
      .join('&');
  }

  static urlBuilder(urlParams) {
    // Error control: if the url parameter is empty, then return an empty string
    if(!urlParams) {
      return '';
    }
    // Otherwise, return the following as a single string
    return Object.keys(urlParams)
      .map(key => `${key}=${urlParams[key]}`)
      .join('&');
  }

  static headers() {
    return {
      Accept: "application/json"
    };
  }
  // endPoint refers to the url that comes after the baseURL() http:.../v2...
  // method refers to the http methods (GET, POST, etc.)
  // urlParams refers to the venues on Foursquare
  static simpleFetch(endPoint, method, urlParams) {

  }
}
