import React from 'react'

const Testimonial = () => {
	return (
		<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
			<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
			<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-zicta-blue/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
			<div className="mx-auto max-w-2xl lg:max-w-4xl">
				<figure className="mt-10">
					<blockquote className="text-center text-lg font-semibold leading-8 text-zicta-blue sm:text-2xl sm:leading-9">
						<p>
							“Hard work and determination are the cornerstones of success. It
							is not enough to simply dream or have talent, one must put in the
							effort and persevere through challenges. The reward for hard work
							is not only achieving one's goals but also the personal growth and
							fulfillment that comes with the journey.”
						</p>
					</blockquote>
					<figcaption className="mt-10">
						<img
							className="mx-auto h-10 w-10 rounded-full"
							src="/assets/dg.jpg"
							alt=""
						/>
						<div className="mt-4 flex items-center flex-col  justify-center space-x-3 text-base">
							<div className="font-semibold text-gray-900">
								Eng. Choolwe Andrew Nalubamba
							</div>
							<svg
								viewBox="0 0 2 2"
								width={3}
								height={3}
								aria-hidden="true"
								className="fill-gray-900">
								<circle cx={1} cy={1} r={1} />
							</svg>
							<div className="text-gray-600">DIRECTOR GENERAL</div>
						</div>
					</figcaption>
				</figure>
			</div>
		</section>
	)
}

export default Testimonial