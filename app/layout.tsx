import Navbar from './components/navbar-new/Navbar'
// import Navbar from './components/nav'
import './globals.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Open_Sans, Noto_Sans } from 'next/font/google'
import Wrapper from '@/context/wrapper'

const noto = Noto_Sans({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

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
			<body className={noto.className}>
				<Wrapper>{children}</Wrapper>
			</body>
		</html>
	)
}
