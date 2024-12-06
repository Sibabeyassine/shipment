# Shipment History UI

A modern, responsive React application for tracking shipment history with real-time status updates and timeline visualization.

## Features

- 📦 Real-time shipment tracking
- 📅 Chronological timeline view
- 🚚 Multiple shipment status indicators
- 📱 Responsive design for all devices
- 💬 Expandable comments
- 🎨 Beautiful UI with status-specific colors
- 🌍 International shipment support

## Status Indicators

- ✅ Delivered (Green)
- 📍 Arrived at Location (Blue)
- 🚛 In Transit/Out for Delivery (Purple)
- ⚠️ Delayed/Exception (Yellow)

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shipment-history-ui
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## Project Structure

```
src/
├── components/          # React components
│   ├── ShipmentEvent.tsx   # Individual shipment event
│   ├── ShipmentTimeline.tsx # Timeline container
│   └── Comment.tsx         # Expandable comments
├── data/               # Shipment data files
│   ├── shipment1.json
│   ├── shipment2.json
│   └── shipment3.json
├── types/             # TypeScript type definitions
│   └── shipment.ts
├── utils/             # Utility functions
│   └── shipmentHelpers.ts
└── App.tsx            # Main application component
```

## Data Format

The application expects shipment data in the following format:

```typescript
interface ShipmentEvent {
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
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide Icons

## License

MIT License - feel free to use this project for your own purposes.