const navigation = {
	solutions: [
		{ name: 'Marketing', href: '#' },
		{ name: 'Analytics', href: '#' },
		{ name: 'Commerce', href: '#' },
		{ name: 'Insights', href: '#' },
	],
	support: [
		{ name: 'Pricing', href: '#' },
		{ name: 'Documentation', href: '#' },
		{ name: 'Guides', href: '#' },
		{ name: 'API Status', href: '#' },
	],
	company: [
		{ name: 'About', href: '#' },
		{ name: 'Blog', href: '#' },
		{ name: 'Jobs', href: '#' },
		{ name: 'Press', href: '#' },
		{ name: 'Partners', href: '#' },
	],
	legal: [
		{ name: 'Claim', href: '#' },
		{ name: 'Privacy', href: '#' },
		{ name: 'Terms', href: '#' },
	],
}

const Footer = () => {
	return (
		<footer className="bg-zicta-blue  " aria-labelledby="footer-heading">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto w-5/6 pb-8 pt-16 sm:pt-24 lg:pt-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<div className="space-y-8">
						<img
							className="h-[150px] w-[150px]"
							src="/assets/hero.png"
							alt="Zambia Information and Communications Technology Authority"
						/>
						<p className="text-sm leading-6 text-gray-300">
							Zambia Information and Communications Technology Authority
						</p>
						{/* <div className="flex space-x-6">
                {navigation.social.map((item) => (
                  <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                  </a>
                ))}
              </div> */}
					</div>
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-yellow-500">
									Solutions
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.solutions.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-yellow-500">
									Support
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.support.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-yellow-500">
									Company
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-yellow-500">
									Legal
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.legal.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white">
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
					<p className="text-xs leading-5 text-gray-400">
						&copy; 2023 ZICTA, Limited. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
