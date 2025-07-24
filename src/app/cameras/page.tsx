import Navbar from '@/components/Navbar';
import CameraList from '@/components/CameraList';

export default function CamerasPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">All CCTV Cameras</h2>
        <p className="text-gray-600 mb-6">
          Here is a list of all CCTV cameras deployed across the premises with their locations.
        </p>
        <CameraList />
      </div>
    </main>
  );
}

