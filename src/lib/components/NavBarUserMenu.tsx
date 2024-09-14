import { NavbarItem } from '@nextui-org/react';
import Image from 'next/image';

export function NavBarUserMenu() {
  return (
    <NavbarItem className="hidden lg:flex">
      <div className="flex items-center justify-center gap-5 rounded-xl bg-white-100 p-3 shadow-xl">
        <Image
          src="https://homefusion.s3.sa-east-1.amazonaws.com/Ellipse+2.png"
          alt="Avatar"
          className="h-5 w-5 rounded-full"
          width={10}
          height={10}
        />
        <div className="text-sm">Muhammad</div>
      </div>
    </NavbarItem>
  );
}
