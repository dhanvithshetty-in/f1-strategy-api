import './globals.css';
import PitWallBackground from '../components/PitWallBackground';

export const metadata = {
  title: 'F1 Pit Wall Strategy',
  description: 'Race-ready tire strategy dashboard',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PitWallBackground>{children}</PitWallBackground>
      </body>
    </html>
  );
}
