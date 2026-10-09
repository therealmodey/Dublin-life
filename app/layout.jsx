import './globals.css';

export const metadata = {
  title: 'Lagos Life · Map Explorer',
  icons: { icon: '/icon.svg' },
  description: 'Explore a standalone recreation of the Lagos Life city map, including Lagos, Abuja and a Dublin expansion.',
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
