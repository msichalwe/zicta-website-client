// import Navbar from './components/navbar'
import Navbar from './components/nav'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Inter } from 'next/font/google'
import Wrapper from '@/context/wrapper'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Zambia Information and Communications Technology Authority',
	description:
		'Offical Website of the Zambia Information and Communications Technology Authority.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Wrapper>
					<Navbar />
					{children}
					<Footer />
				</Wrapper>
			</body>
		</html>
	)
}
