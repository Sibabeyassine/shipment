export interface ShipmentEvent {
  eventDateTime: string;
  shipment: {
    status?: {
      shipmentIsDelayed?: number;
      shipmentException?: number;
    };
    satus?: {
      shipmentIsDelayed?: number;
      shipmentException?: number;
    };
  };
  eventPosition: {
    status: string;
    comments: string;
    city: string;
    country: string;
  };
}

export type GroupedEvents = {
  [date: string]: ShipmentEvent[];
};

export interface ShipmentStatus {
  isDelayed: boolean;
  hasException: boolean;
}