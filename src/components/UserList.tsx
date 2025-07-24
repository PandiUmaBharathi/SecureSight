'use client';

export default function UserList() {
  return (
    <div className="border rounded-lg p-4 shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">👤 Users</h2>
      <ul className="space-y-2 text-sm">
        <li><span className="font-medium">admin@securesight.com</span> — Admin</li>
        <li><span className="font-medium">security01@securesight.com</span> — Guard</li>
        <li><span className="font-medium">reviewer@securesight.com</span> — Analyst</li>
      </ul>
    </div>
  );
}
