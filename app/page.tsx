import Navbar from './components/navbar-new/Navbar'
import Footer from './components/footer'
import Header from './components/new-comps/header'
import Services from './components/new-comps/services'
import LatestNews from './components/new-comps/latest-news'

export const revalidate = 0
export default async function Home() {
	return (
		<>
			<Navbar />
			<main className="min-h-screen">
				<Header />
				<Services />
				<LatestNews />
			</main>
			<Footer />
		</>
	)
}
