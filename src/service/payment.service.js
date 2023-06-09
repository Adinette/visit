import { request } from "../service/request.service";
/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function addCategory(data) {
  return request("params/create-category", "POST", data);
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
 * Sends a PUT request to update cars with the provided data.
 *
 * @param {object} data - The data to be used in the update request.
 * @return {Promise} A Promise that resolves with the result of the update request.
 */
export function updateCategory(data) {
  return request("categorie", "POST", data);
}
/*
 * @param {object} data - The data to be used in the update request.
 * @return {Promise} A Promise that resolves with the result of the update request.
 */
export function deleteCategory(data) {
  return request("categorie", "POST", data);
}
