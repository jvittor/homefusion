'use client';

import { NextUIProvider } from '@nextui-org/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { ThemeProvider } from '@/lib/components/theme-provider';

import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  const shouldShowHeader = pathname === '/';
  const GoogleID = process.env.GOOGLE_ID ?? '';

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <GoogleOAuthProvider clientId={GoogleID}>
        <NextUIProvider>
          <div className="flex flex-col bg-white-100">
            {shouldShowHeader && <Header />}
            <main>{children}</main>
          </div>
        </NextUIProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
};

export default Layout;
