'use client';
export default function IncidentInfo() {
  return (
    <div className="border rounded-lg p-4 shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">🚨 Incidents</h2>
      <ul className="space-y-2 text-sm">
        <li><span className="font-medium">Unauthorized Access</span> — 5 incidents</li>
        <li><span className="font-medium">Face Recognised</span> — 4 incidents</li>
        <li><span className="font-medium">Gun Threat</span> — 3 incidents</li>
      </ul>
    </div>
  );
}
