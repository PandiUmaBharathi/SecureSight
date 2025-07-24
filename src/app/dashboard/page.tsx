'use client';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import IncidentPlayer from '@/components/IncidentPlayer';
import IncidentList from '@/components/IncidentList';

export default function DashboardPage() {
  const [selectedImage, setSelectedImage] = useState('/thumbnails/incident2.png');
  const [incidentCount, setIncidentCount] = useState(0);

  // Fetch unresolved incident count
  useEffect(() => {
    async function fetchCount() {
      const res = await fetch('/api/incidents?resolved=false');
      const data = await res.json();
      setIncidentCount(data.length);
    }
    fetchCount();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
        <div className="md:col-span-2">
          <h2 className="text-lg font-semibold mb-2">Incident Viewer</h2>
          <IncidentPlayer image={selectedImage} onSelect={setSelectedImage}/>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">
           {incidentCount} Unresolved Incidents 
          </h2>
          <IncidentList onSelect={setSelectedImage} />
        </div>
      </div>
    </main>
  );
}
