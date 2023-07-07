import Image from 'next/image'
import Hero from './components/hero-section'
import SectionTemp from './components/section-temp'
import LatestBanner from './components/latest-banner'

export default function Home() {
	return (
		<main>
			<Hero />
			{/* <SectionTemp /> */}
			<LatestBanner />
		</main>
	)
}
