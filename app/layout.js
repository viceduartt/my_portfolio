import './[locale]/reset.css'
import './[locale]/style.css'
import AudioPlayer from './[locale]/components/AudioPlayer';


export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  console.log(locale)

  return (
    <html lang="en">
      <body>
        <AudioPlayer/>
        {children}
      </body>
    </html>
  );
}
