import SERVICE_BROKER from "./service.constant.json";

export default SERVICE_BROKER;

export type ServiceBrokerConstantType = { [key: string]: any };

export { default as COLLECTIONS, CollectionsConstantType } from './collections.constant'

export const addLocalServices = (services: ServiceBrokerConstantType) => {
  Object.assign(SERVICE_BROKER, services);
  console.log("added local services!");
};
