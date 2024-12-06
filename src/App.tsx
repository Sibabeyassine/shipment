import React, { useMemo } from 'react';
import ShipmentTimeline from './components/ShipmentTimeline';
import { groupEventsByDate } from './utils/shipmentHelpers';
import shipmentData1 from './data/shipment1.json';
import shipmentData2 from './data/shipment2.json';
import shipmentData3 from './data/shipment3.json';

function App() {
  const allShipments = useMemo(() => {
    const combinedData = [...shipmentData1, ...shipmentData2, ...shipmentData3];
    return groupEventsByDate(combinedData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Shipment History</h1>
        {Object.entries(allShipments).map(([date, events]) => (
          <ShipmentTimeline
            key={date}
            date={date}
            events={events}
          />
        ))}
      </div>
    </div>
  );
}

export default App;