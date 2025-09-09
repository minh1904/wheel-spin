'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../../../public/logo.svg';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-gradient-to-r from-[#AA000A] to-[#DA202B] shadow-md h-20 ">
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between px-6 h-full'
        )}
      >
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={150} height={50} priority />
        </div>

        {/* Menu desktop */}
        <div className="hidden md:flex items-center gap-8 text-white font-bold">
          <Link href="/" className="hover:underline duration-300">
            LUẬT CHƠI
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 bg-[#AA000A] text-white font-bold py-4">
          <Link
            href="/"
            className="hover:underline"
            onClick={() => setIsOpen(false)}
          >
            LUẬT CHƠI
          </Link>
        </div>
      )}
    </nav>
  );
}
