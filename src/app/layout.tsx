import './globals.css'
import './styles/index.css'


export const metadata = {
  title: 'Cheerbequest',
  description: 'Fundraising || Crowdfunnding',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
