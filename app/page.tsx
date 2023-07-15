import Hero from './sections/hero-section'
import FaqSection from './sections/faq-section'
import LatestBanner from './sections/latest-banner'
import SectionTemp from './sections/section-temp'
import ProjectSection from './sections/projects-section'
import StatSection from './sections/stat-section'
import Testimonial from './sections/testimonial-section'
import PartnersSection from './sections/partners-section'
import MediaSection from './sections/media-section'
import ContactSection from './sections/contact-section'
import MapSection from './sections/map-section'
import Footer from './components/footer'
import HeroSlide from './sections/hero-slide'
import getHero from '@/actions/getHero'
import getBanner from '@/actions/getBanner'
import getWhatWeDo from '@/actions/getWhatWeDo'
import getStats from '@/actions/getStats'
import getTestimonial from '@/actions/getTestimonial'
import Navbar from './components/nav'

export const revalidate = 0
export default async function Home() {
	const hero = await getHero()
	const banner = await getBanner()
	const whatWeDo = await getWhatWeDo()
	const stats = await getStats()
	const testimonial = await getTestimonial()

	return (
		<main className="relative">
			<div className="fixed w-full">
				<Navbar />
			</div>
			<HeroSlide data={hero} />
			<LatestBanner data={banner} />
			<Hero data={whatWeDo} />
			<SectionTemp />
			<StatSection data={stats} />
			<ProjectSection />
			<Testimonial data={testimonial} />
			<PartnersSection />
			<MediaSection />
			<FaqSection />
			<MapSection />
			<ContactSection />
			<Footer />
		</main>
	)
}
