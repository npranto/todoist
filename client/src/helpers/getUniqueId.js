import { v4 as uuidv4 } from "uuid";

/**
 * Returns a random unique id as a string
 * @returns {string} - a unique long digit unique string id
 */
const getUniqueId = () => uuidv4();

export default getUniqueId;
