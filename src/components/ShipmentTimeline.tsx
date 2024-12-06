import React from 'react';
import { AlertTriangle } from 'lucide-react';
import type { ShipmentEvent } from '../types/shipment';
import ShipmentEventComponent from './ShipmentEvent';
import { formatDate, getShipmentStatus } from '../utils/shipmentHelpers';

interface ShipmentTimelineProps {
  events: ShipmentEvent[];
  date: string;
}

const ShipmentTimeline: React.FC<ShipmentTimelineProps> = ({ events, date }) => {
  const hasException = events.some(event => {
    const status = getShipmentStatus(event);
    return status.hasException;
  });

  const isDelayed = events.some(event => {
    const status = getShipmentStatus(event);
    return status.isDelayed;
  });

  const statusClasses = `
    ${isDelayed ? 'bg-yellow-50 border-yellow-200' : ''}
    ${hasException ? 'bg-red-50 border-red-200' : ''}
    ${!isDelayed && !hasException ? 'bg-white border-gray-200' : ''}
  `;

  return (
    <div className={`p-6 rounded-lg border ${statusClasses} mb-6 shadow-sm`}>
      <div className="flex items-center gap-2 mb-6">
        <h3 className="text-lg font-semibold">
          {formatDate(date)}
        </h3>
        {(isDelayed || hasException) && (
          <div className="flex items-center gap-1">
            <AlertTriangle className={`w-5 h-5 ${
              hasException ? 'text-red-500' : 'text-yellow-500'
            }`} />
            <span className={`text-sm font-medium ${
              hasException ? 'text-red-600' : 'text-yellow-600'
            }`}>
              {hasException ? 'Exception' : 'Delayed'}
            </span>
          </div>
        )}
      </div>
      <div className="space-y-2">
        {events.map((event, index) => (
          <ShipmentEventComponent
            key={`${event.eventDateTime}-${index}`}
            event={event}
            isLast={index === events.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ShipmentTimeline;