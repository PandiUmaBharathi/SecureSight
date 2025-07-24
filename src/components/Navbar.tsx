'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FaTachometerAlt,
  FaVideo,
  FaLayerGroup,
  FaExclamationTriangle,
  FaUser,
} from 'react-icons/fa';
import clsx from 'clsx';

const navLinks = [
  { href: '/dashboard', label: 'Dashboard', icon: <FaTachometerAlt /> },
  { href: '/cameras', label: 'Cameras', icon: <FaVideo /> },
  { href: '/scenes', label: 'Scenes', icon: <FaLayerGroup /> },
  { href: '/incidents', label: 'Incidents', icon: <FaExclamationTriangle /> },
  { href: '/users', label: 'Users', icon: <FaUser /> },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">SecureSight</h1>
          <p className="text-xs text-gray-400">CCTV Monitoring Dashboard</p>
        </div>

        <nav>
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="flex items-center">
                <Link
                  href={link.href}
                  className={clsx(
                    'flex items-center space-x-1 hover:text-yellow-400 transition font-medium',
                    pathname === link.href && 'text-yellow-400 underline underline-offset-4'
                  )}
                >
                  <span className="text-lg">{link.icon}</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
