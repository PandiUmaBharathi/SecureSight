import Navbar from '@/components/Navbar';
import SceneList from '@/components/SceneList';

export default function ScenesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <SceneList />
      </div>
    </main>
  );
}
