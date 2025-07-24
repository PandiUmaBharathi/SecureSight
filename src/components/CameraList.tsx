'use client';
import { useEffect, useState } from 'react';

interface Camera {
  id: number;
  name: string;
  location: string;
}

export default function CameraList() {
  const [cameras, setCameras] = useState<Camera[]>([]);

  useEffect(() => {
    fetch('/api/cameras')
      .then((res) => res.json())
      .then(setCameras);
  }, []);

  return (
    <div className="border rounded-lg p-4 shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">📷 CCTV Cameras</h2>
      <ul className="space-y-2">
        {cameras.map((camera) => (
          <li key={camera.id} className="text-sm">
            <span className="font-medium">{camera.name}</span> — {camera.location}
          </li>
        ))}
      </ul>
    </div>
  );
}
