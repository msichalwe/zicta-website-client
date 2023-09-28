'use client'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const NotFound = () => {
	const router = useRouter()
	return (
		<div className="h-screen w-full bg-hero-pattern space-y-6 bg-no-repeat bg-cover flex-col text-white flex items-center justify-center">
			<div>
				<h1 className="text-9xl font-bold">404</h1>
				<h2 className="text-2xl font-bold">Oops! Page not found</h2>
			</div>
			<div>
				{/* M.S(jamies dad)  */}
				{/* K.K(Kalan) */}
				{/* M.M(Miles) */}
				<Button
					className="text-zicta-blue"
					variant={'outline'}
					onClick={() => router.push('/')}>
					Go back home
				</Button>
			</div>
		</div>
	)
}

export default NotFound
