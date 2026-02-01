'use client';

import { useState } from 'react';
import { HoveredLink, Menu, MenuItem, ProductItem } from '@/components/ui/navbar-menu';
import { cn } from '@/lib/utils';
import { MdOutlineLightbulb } from 'react-icons/md';

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        'fixed top-10 inset-x-0 max-w-4xl mx-auto z-50',
        className
      )}
    >
      <Menu setActive={setActive}>
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MdOutlineLightbulb className="text-amber-500 text-2xl" />
          <span className="font-bold text-lg hidden md:inline">SLC Manufacturing</span>
        </div>

        {/* Services */}
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#steel-poles">Steel Pole Manufacturing</HoveredLink>
            <HoveredLink href="#led-fixtures">LED Fixture Installation</HoveredLink>
            <HoveredLink href="#solar-lights">Solar Street Lights</HoveredLink>
            <HoveredLink href="#maintenance">Maintenance & Support</HoveredLink>
          </div>
        </MenuItem>

        {/* Products */}
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Standard Steel Poles"
              href="#products"
              src="https://images.unsplash.com/photo-1581092162562-40038d87c0a6?q=80&w=500&auto=format&fit=crop"
              description="Durable high-quality steel poles for street lighting"
            />
            <ProductItem
              title="High-Performance LED"
              href="#products"
              src="https://images.unsplash.com/photo-1604593686803-dc4c4eb05d00?q=80&w=500&auto=format&fit=crop"
              description="Energy-efficient LED fixtures (50-400W)"
            />
            <ProductItem
              title="Solar Street Lights"
              href="#products"
              src="https://images.unsplash.com/photo-1586124299649-e551d138c9e2?q=80&w=500&auto=format&fit=crop"
              description="Eco-friendly solar-powered lighting solutions"
            />
            <ProductItem
              title="Smart Traffic Control"
              href="#products"
              src="https://images.unsplash.com/photo-1494022299300-899b96e49893?q=80&w=500&auto=format&fit=crop"
              description="IoT-enabled traffic management systems"
            />
          </div>
        </MenuItem>

        {/* Resources */}
        <MenuItem setActive={setActive} active={active} item="Resources">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#installation-guide">Installation Guide</HoveredLink>
            <HoveredLink href="#technical-specs">Technical Specifications</HoveredLink>
            <HoveredLink href="#case-studies">Case Studies</HoveredLink>
            <HoveredLink href="#documentation">Documentation</HoveredLink>
          </div>
        </MenuItem>

        {/* About */}
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#company">Company Overview</HoveredLink>
            <HoveredLink href="#mission">Our Mission</HoveredLink>
            <HoveredLink href="#team">Our Team</HoveredLink>
            <HoveredLink href="#history">Our History</HoveredLink>
          </div>
        </MenuItem>

        {/* Contact Us */}
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="mailto:info@slcmanufacturing.com">Email Us</HoveredLink>
            <HoveredLink href="tel:+1-800-XXX-XXXX">Call Us</HoveredLink>
            <HoveredLink href="#contact-form">Contact Form</HoveredLink>
            <HoveredLink href="#locations">Locations</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export { Navbar };
