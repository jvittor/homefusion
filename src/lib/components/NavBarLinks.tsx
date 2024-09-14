/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link, NavbarItem } from '@nextui-org/react';
import Image from 'next/image';
import { FaHeart } from 'react-icons/fa';
import { FaHouse } from 'react-icons/fa6';
import { HiCalculator } from 'react-icons/hi2';

export function NavBarLinks() {
  return (
    <>
      <NavbarItem className="flex items-center justify-center gap-2">
        <FaHouse />
        <Link color="foreground" href="#">
          Início
        </Link>
      </NavbarItem>
      <NavbarItem className="flex items-center justify-center gap-2">
        <FaHeart />
        <Link color="foreground" href="#">
          Casas Salvas
        </Link>
      </NavbarItem>
      <NavbarItem className="flex items-center justify-center gap-2">
        <Image
          alt="Search"
          width={18}
          height={18}
          src="https://homefusion.s3.sa-east-1.amazonaws.com/Frame.png"
        />
        <Link color="foreground" href="#">
          Pesquisas Salvas
        </Link>
      </NavbarItem>
      <NavbarItem className="flex items-center justify-center gap-2">
        <HiCalculator />
        <Link color="foreground" href="#">
          Calculadora
        </Link>
      </NavbarItem>
    </>
  );
}
