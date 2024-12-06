import React from 'react';
import { MapPin, CheckCircle, Truck, AlertTriangle } from 'lucide-react';
import type { ShipmentEvent as ShipmentEventType } from '../types/shipment';
import Comment from './Comment';
import { formatTime, formatCity } from '../utils/shipmentHelpers';

interface ShipmentEventProps {
  event: ShipmentEventType;
  isLast: boolean;
}

const ShipmentEvent: React.FC<ShipmentEventProps> = ({ event, isLast }) => {
  const status = event.eventPosition.status.toUpperCase();
  const isDelivered = status === 'DELIVERED';
  const isArrived = status.includes('ARRIVED');
  const isInTransit = status === 'IN TRANSIT';
  const isOutForDelivery = status === 'OUT FOR DELIVERY';
  const isDelayed = status.includes('DELAYED');

  const getIcon = () => {
    if (isDelivered) return <CheckCircle className="w-6 h-6 text-green-500" />;
    if (isArrived) return <MapPin className="w-6 h-6 text-blue-500" />;
    if (isInTransit || isOutForDelivery) return <Truck className="w-6 h-6 text-purple-500" />;
    if (isDelayed) return <AlertTriangle className="w-6 h-6 text-yellow-500" />;
    return <div className="w-3 h-3 rounded-full bg-gray-400" />;
  };

  const getStatusColor = () => {
    if (isDelivered) return 'text-green-600';
    if (isDelayed) return 'text-yellow-600';
    if (isArrived) return 'text-blue-600';
    if (isInTransit || isOutForDelivery) return 'text-purple-600';
    return 'text-gray-900';
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-6 h-6 flex items-center justify-center">
          {getIcon()}
        </div>
        {!isLast && <div className="w-0.5 h-full bg-gray-200 mt-2" />}
      </div>
      <div className="flex-1 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className={`text-sm font-semibold ${getStatusColor()}`}>
            {status}
          </span>
          <span className="text-sm text-gray-500">
            {formatTime(event.eventDateTime)}
          </span>
        </div>
        <div className="mt-1 text-sm text-gray-600">
          {formatCity(event.eventPosition.city, event.eventPosition.country)}
        </div>
        <Comment comment={event.eventPosition.comments} />
      </div>
    </div>
  );
};

export default ShipmentEvent;