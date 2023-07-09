import Image from 'next/image'
import Hero from './sections/hero-section'

import FaqSection from './sections/faq-section'
import SlidingHero from './sections/sliding-hero'
import LatestBanner from './sections/latest-banner'
import SectionTemp from './sections/section-temp'
import ProjectSection from './sections/projects-section'
import StatSection from './sections/stat-section'
import Testimonial from './sections/testimonial-section'
import PartnersSection from './sections/partners-section'
import BlogSection from './sections/blog-section'
import ContactSection from './sections/contact-section'
import Hero2 from './sections/hero-true-section'
import MapSection from './sections/map-section'

export default function Home() {
	return (
		<main>
			<SlidingHero />

			<LatestBanner />
			<Hero />
			<SectionTemp />
			<StatSection />
			<ProjectSection />
			<Testimonial />
			<PartnersSection />
			<BlogSection />
			<FaqSection />
			<MapSection />
			<ContactSection />
		</main>
	)
}
