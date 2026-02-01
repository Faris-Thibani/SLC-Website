'use client';

import { SmoothScrollHero } from '@/components/ui/modern-hero';
import { Navbar } from '@/components/ui/navbar-demo';

export default function Home() {
  return (
    <>
      <Navbar className="top-2" />
      <SmoothScrollHero />
    </>
  );
}
