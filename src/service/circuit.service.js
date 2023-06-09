import { request } from "../service/request.service";
/**
 * Retrieves the marque information using an HTTP GET request to the 'params/marques' endpoint.
 *
 * @return {Promise} A Promise that resolves to the retrieved marque information.
 */
export function getMarque() {
  return request("params/brand ", "GET");
}
/**
 * Retrieves the marque information using an HTTP GET request to the 'params/marques' endpoint.
 *
 * @return {Promise} A Promise that resolves to the retrieved marque information.
 */
export function getModel() {
  return request("params/models", "GET");
}
/**
 * Retrieves the marque information using an HTTP GET request to the 'params/marques' endpoint.
 *
 * @return {Promise} A Promise that resolves to the retrieved marque information.
 */
export function getCategory() {
  return request("params/vehicle-type", "GET");
}

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
/**
 * Sends a PUT request to update cars with the provided data.
 *
 * @param {object} data - The data to be used in the update request.
 * @return {Promise} A Promise that resolves with the result of the update request.
 */
export function updateCars(data) {
  return request("offer/update-vehicle", "POST", data);
}
/*
 * @param {object} data - The data to be used in the update request.
 * @return {Promise} A Promise that resolves with the result of the update request.
 */
export function deleteCars(data) {
  return request("offer/delete-vehicle", "POST", data);
}
