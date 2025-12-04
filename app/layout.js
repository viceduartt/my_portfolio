
import AudioPlayer from './[locale]/components/AudioPlayer';


export default async function RootLayout({ children, params }) {
  return (
    <html lang="en" translate='no'>
      <body>
        <AudioPlayer/>
        {children}
      </body>
    </html>
  );
}
