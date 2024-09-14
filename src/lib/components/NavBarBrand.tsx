import { NavbarBrand } from '@nextui-org/react';
import Image from 'next/image';

export function NavBarBrand() {
  return (
    <NavbarBrand>
      <Image
        alt="Logo"
        width={24}
        height={24}
        src="https://homefusion.s3.sa-east-1.amazonaws.com/home-svgrepo-com+(1)+1.png"
      />
      <p className="text-inherit font-bold">HOME FUSION</p>
    </NavbarBrand>
  );
}
