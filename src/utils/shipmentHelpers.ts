export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatTime = (dateString: string) => {
  return new Date(dateString).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const getShipmentStatus = (event: any): { isDelayed: boolean; hasException: boolean } => {
  const status = event.shipment.status || event.shipment.satus;
  return {
    isDelayed: status?.shipmentIsDelayed === 1,
    hasException: status?.shipmentException === 1,
  };
};

export const formatCity = (city: string, country: string) => {
  return `${city.charAt(0).toUpperCase()}${city.slice(1).toLowerCase()}, ${country.toUpperCase()}`;
};

export const groupEventsByDate = (events: any[]) => {
  const groups: { [key: string]: any[] } = {};
  
  events.forEach(event => {
    const date = event.eventDateTime.split('T')[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(event);
  });

  // Sort dates in descending order
  return Object.entries(groups)
    .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
    .reduce((acc, [date, events]) => {
      acc[date] = events.sort((a, b) => 
        new Date(b.eventDateTime).getTime() - new Date(a.eventDateTime).getTime()
      );
      return acc;
    }, {} as { [key: string]: any[] });
};