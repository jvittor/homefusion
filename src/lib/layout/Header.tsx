/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';

import { NavBarBrand } from '../components/NavBarBrand';
import { NavBarLinks } from '../components/NavBarLinks';
import { NavBarUserMenu } from '../components/NavBarUserMenu';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    'Profile',
    'Dashboard',
    'Activity',
    'Analytics',
    'System',
    'Deployments',
    'My Settings',
    'Team Settings',
    'Help & Feedback',
    'Log Out',
  ];

  return (
    <Navbar className="bg-white-100 p-6 text-black-100" isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <IoIosMenu
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          size={24}
        />
      </NavbarContent>
      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavBarBrand />
      </NavbarContent>
      <NavbarContent
        className="hidden gap-4 font-medium text-black-200 sm:flex"
        justify="center"
      >
        <NavBarBrand />
        <NavBarLinks />
      </NavbarContent>
      <NavbarContent justify="end">
        <NavBarUserMenu />
      </NavbarContent>
      {isMenuOpen && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={index}>
              <Link
                className="w-full"
                color={
                  index === 2
                    ? 'warning'
                    : index === menuItems.length - 1
                      ? 'danger'
                      : 'foreground'
                }
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
