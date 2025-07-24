'use client';

export default function SceneList() {
  return (
    <div className="border rounded-lg p-4 shadow w-full max-w-md">
      <h2 className="text-xl font-semibold mb-2">🎬 Scenes</h2>
      <ul className="space-y-2 text-sm">
        <li><span className="font-medium">Lobby Entrance</span> — Scene 1</li>
        <li><span className="font-medium">Vault Zone</span> — Scene 2</li>
        <li><span className="font-medium">Parking Lot</span> — Scene 3</li>
      </ul>
    </div>
  );
}
