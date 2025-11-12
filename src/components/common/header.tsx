'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[100] w-full transition-all duration-500 ${
        isScrolled ? 'bg-white/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <h1
              className={`font-serif text-3xl font-bold transition-all duration-300 ${
                isScrolled ? 'text-[#E85A8C]' : 'text-white drop-shadow-lg'
              }`}
            >
              SUEE
            </h1>
            <div
              className={`absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                isScrolled ? 'bg-[#E85A8C]' : 'bg-white'
              }`}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {[
                { name: 'Trang chủ', href: '/' },
                { name: 'Về Suee', href: '/about' },
                { name: 'Dự án', href: '/projects' },
                { name: 'Kinh nghiệm', href: '/experience' },
              ].map(item => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className={`group text-md relative font-light tracking-wider transition-all duration-300 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-[#E85A8C]'
                        : 'text-white hover:text-[#FFD700]'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                        isScrolled ? 'bg-[#E85A8C]' : 'bg-[#FFD700]'
                      }`}
                    />
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className={`relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-medium tracking-wider uppercase transition-all duration-300 ${
                    isScrolled
                      ? 'bg-[#E85A8C] text-white shadow-lg shadow-[#E85A8C]/30 hover:bg-[#B32B63]'
                      : 'border-2 border-white text-white hover:bg-white hover:text-[#E85A8C]'
                  }`}
                >
                  <span className="relative z-10">Liên hệ</span>
                  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#FFD700] to-[#FF6B9D] opacity-0 transition-opacity duration-300 hover:opacity-20" />
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden ${
              isScrolled ? 'text-[#E85A8C]' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 origin-center transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-2 rotate-45' : ''
              } ${isScrolled ? 'bg-[#E85A8C]' : 'bg-white'}`}
            />
            <span
              className={`h-0.5 w-6 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              } ${isScrolled ? 'bg-[#E85A8C]' : 'bg-white'}`}
            />
            <span
              className={`h-0.5 w-6 origin-center transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-2 -rotate-45' : ''
              } ${isScrolled ? 'bg-[#E85A8C]' : 'bg-white'}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-gradient-to-br from-[#E85A8C] to-[#B32B63] transition-all duration-500 md:hidden ${
          isMobileMenuOpen
            ? 'pointer-events-auto opacity-100'
            : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex h-full items-center justify-center">
          <ul className="space-y-8 text-center">
            {[
              { name: 'Trang chủ', href: '/' },
              { name: 'Về Suee', href: '/about' },
              { name: 'Dự án', href: '/projects' },
              { name: 'Kinh nghiệm', href: '/experience' },
            ].map((item, index) => (
              <li
                key={item.name}
                className={`transition-all duration-500 ${
                  isMobileMenuOpen
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-4xl font-bold text-white transition-all duration-300 hover:text-[#FFD700]"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li
              className={`transition-all duration-500 ${
                isMobileMenuOpen
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              <button className="rounded-full border-2 border-white px-8 py-3 text-lg font-medium tracking-wider text-white uppercase transition-all duration-300 hover:bg-white hover:text-[#E85A8C]">
                Liên hệ
              </button>
            </li>
          </ul>
        </nav>

        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-white blur-3xl" />
        </div>
      </div>
    </header>
  );
};

export default Header;
