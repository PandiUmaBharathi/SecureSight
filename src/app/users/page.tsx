import Navbar from '@/components/Navbar';
import UserList from '@/components/UserList';

export default function UsersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-6">
        <UserList />
      </div>
    </main>
  );
}
