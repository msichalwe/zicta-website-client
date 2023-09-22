import './globals.css'

import { Inter } from 'next/font/google'
import Wrapper from '@/context/wrapper'

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
				<Wrapper>{children}</Wrapper>
			</body>
		</html>
	)
}
