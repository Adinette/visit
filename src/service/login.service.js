import { request } from "../service/request.service";

/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function addCars(data) {
  return request("offer/save-vehicle", "POST", data);
}
/**
 * Retrieves the marque information using an HTTP GET request to the 'params/marques' endpoint.
 *
 * @return {Promise} A Promise that resolves to the retrieved marque information.
 */
export function getCars() {
  return request("offer/vehicles", "GET");
}