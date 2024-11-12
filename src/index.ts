import SERVICE_BROKER from "./service.constant.json";
import COLLECTIONS from "./collections.constant"

export { SERVICE_BROKER, COLLECTIONS };

export type ServiceBrokerConstantType = { [key: string]: any };

export type CollectionsConstantType = { [key: string]: string };

export const addLocalServices = (services: ServiceBrokerConstantType) => {
  Object.assign(SERVICE_BROKER, services);
  console.log("added local services!");
};
