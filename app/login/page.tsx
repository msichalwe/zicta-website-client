import AuthForm from './components/auth-form'

export default function Home() {
	return (
		<section
			className={`h-screen flex w-full items-center justify-center bg-white bg-no-repeat bg-cover  `}>
			<div className="md:basis-1/2 h-full relative flex items-center flex-col justify-center">
				<div
					className={` content-hero md:h-[100px] md:w-[100px] h-[150px] w-[150px] md:absolute md:top-10 md:left-20`}
				/>
				<AuthForm />
			</div>
			<div className="md:basis-1/2 h-full hidden bg-primary-500 relative md:flex items-center justify-center">
				<img
					src="/assets/login-bg.png"
					alt=""
					className=" h-full w-full absolute top-0 left-0 right-0 bottom-0"
				/>
				<img
					src="/assets/hero.png"
					alt=""
					className="z-10 h-[600px] w-[600px] "
				/>
			</div>
		</section>
	)
}
