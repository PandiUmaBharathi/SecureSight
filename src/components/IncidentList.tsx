'use client';
import { useEffect, useState } from 'react';

type Incident = {
  id: number;
  type: string;
  tsStart: string;
  tsEnd: string;
  thumbnailUrl: string;
  resolved: boolean;
  camera: {
    name: string;
    location: string;
  };
};

type IncidentListProps = {
  onSelect: (imageUrl: string) => void;
};

const ALLOWED_IMAGES = [
  '/thumbnails/face.png',
  '/thumbnails/gun.png',
  '/thumbnails/incident2.png',
];

export default function IncidentList({ onSelect }: IncidentListProps) {
  const [incidents, setIncidents] = useState<Incident[]>([]);

  useEffect(() => {
    async function fetchIncidents() {
      const res = await fetch('/api/incidents?resolved=false');
      const data = await res.json();
      const filtered = data.filter((incident: Incident) =>
        ALLOWED_IMAGES.includes(incident.thumbnailUrl)
      );

      setIncidents(filtered);
    }
    fetchIncidents();
  }, []);

  const handleResolve = async (id: number) => {
    setIncidents((prev) => prev.filter((incident) => incident.id !== id));
    await fetch(`/api/incidents/${id}/resolve`, {
      method: 'PATCH',
    });
  };
  return (
    <div className="space-y-4">
      {incidents.map((incident) => (
        <div
          key={incident.id}
          className="bg-white shadow p-4 rounded-lg flex items-center space-x-4 hover:bg-gray-50 transition"
        >
          <img
            src={incident.thumbnailUrl}
            alt="Thumbnail"
            className="w-20 h-20 object-cover rounded cursor-pointer"
            onClick={() => onSelect(incident.thumbnailUrl)}
          />

          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-sm text-gray-800">
                {incident.type || 'Unknown'}
              </h4>
              <span className="text-xs text-gray-500">
                {new Date(incident.tsStart).toLocaleTimeString()} -{' '}
                {new Date(incident.tsEnd).toLocaleTimeString()}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Camera: {incident.camera.name} ({incident.camera.location})
            </p>
          </div>

          <button
            onClick={() => handleResolve(incident.id)}
            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
          >
            Resolve
          </button>
        </div>
      ))}
    </div>
  );
}
