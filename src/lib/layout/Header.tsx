/* eslint-disable react/no-array-index-key */
/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Navbar,
  NavbarBrand,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';
import { IoIosMenu } from 'react-icons/io';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Alterna o estado de abertura do menu
  };

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
          onClick={toggleMenu}
          size={24}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 sm:hidden" justify="center">
        <NavbarBrand>
          <Image
            alt="Logo"
            width={24}
            height={24}
            src="https://homefusion.s3.sa-east-1.amazonaws.com/home-svgrepo-com+(1)+1.png"
          />
          <p className="text-inherit font-bold">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand>
          <Image
            alt="Logo"
            width={24}
            height={24}
            src="https://homefusion.s3.sa-east-1.amazonaws.com/home-svgrepo-com+(1)+1.png"
          />
          <p className="text-inherit font-bold">ACME</p>
        </NavbarBrand>
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      {isMenuOpen && (
        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
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
