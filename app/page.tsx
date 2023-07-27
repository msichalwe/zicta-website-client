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
import HeroSlide from './sections/hero-slide'
import getHero from '@/actions/getHero'
import getBanner from '@/actions/getBanner'
import getWhatWeDo from '@/actions/getWhatWeDo'
import getStats from '@/actions/getStats'
import getTestimonial from '@/actions/getTestimonial'
import getFaqs from '@/actions/getFaq'
import getMediaType from '@/actions/getMediaType'
import ServicesSection from './sections/services-section'

export const revalidate = 0
export default async function Home() {
	const hero = await getHero()
	const banner = await getBanner()
	const whatWeDo = await getWhatWeDo()
	const stats = await getStats()

	const faqs = await getFaqs()
	const media = await getMediaType('news')

	return (
		<main className="min-h-screen">
			<HeroSlide data={hero} />
			<ServicesSection />
			<LatestBanner data={banner} />
			<Hero data={whatWeDo} />
			<MediaSection data={media} />
			<SectionTemp />
			<StatSection data={stats} />
			<FaqSection data={faqs} />
			<ContactSection />
		</main>
	)
}
