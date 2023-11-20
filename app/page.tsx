import Footer from './components/footer'
import Header from './components/new-comps/header'
import Services from './components/new-comps/services'
import LatestNews from './components/new-comps/latest-news'
import ContactSection from './sections/contact-section'
import FaqSection from './sections/faq-section'
import { Faq } from '@/types'
import Navbar from './components/navbar'

export default async function Home() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen h-full">
				<Header />
				<LatestNews />
				<Services />
				<FaqSection />
				<div className="mt-[36rem] md:mt-0">
					<ContactSection />
				</div>
			</main>
			<Footer />
		</>
	)
}
