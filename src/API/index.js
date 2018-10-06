// This helper class has a baseURL function that returns the base URL that is used often
// Won't have to type out the same URL; just need to add on to it
class Helper {
  static baseURL() {
    return "http://api.foursquare.com/v2";
  }

  static auth() {
    const keys = {
      client_id: 'HGDYIWSS0FUEOPKOBZISUXYROHPNASRXN54EJDVE0XAQZO12',
      client_secret: 'JXZYMNLQADTJJDYQDYDAQMAOBIOFFT01P0YLHH32SWBRUFX1',
      version_parameter: '20181005'
    }
  }
}
