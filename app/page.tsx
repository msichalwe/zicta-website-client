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
				<FaqSection data={faqData} />
				<div className="mt-[36rem] md:mt-0">
					<ContactSection />
				</div>
			</main>
			<Footer />
		</>
	)
}

const faqData: Array<Faq> = [
	{
		id: '1',
		question: 'How do I register my sim card?',
		answer:
			'You can register your sim card by visiting any of our offices or agents with your NRC and sim card',
	},
	{
		id: '2',
		question: 'How do I report a sim card fraud?',
		answer:
			'You can report a sim card fraud by visiting any of our offices or agents with your NRC and sim card',
	},
	{
		id: '3',
		question: 'How do I access online services',
		answer:
			'You can access online services by visiting our online services section, or by visiting any of our offices',
	},
]
