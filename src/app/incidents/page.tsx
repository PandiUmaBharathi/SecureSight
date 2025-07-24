import Navbar from '@/components/Navbar';
import IncidentInfo from '@/components/IncidentInfo';

export default function IncidentsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <IncidentInfo />
      </div>
    </main>
  );
}
