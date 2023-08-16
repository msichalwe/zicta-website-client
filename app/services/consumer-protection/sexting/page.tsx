import React from 'react'

const Sexting = () => {
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10  ">
				<div className="flex items-start justify-center space-y-2  flex-col">
					<h1 className="text-4xl font-medium">Sexting</h1>
					<p>
						What is it? Sexting is the sending of provocative or sexual photos,
						images, messages or videos using a mobile phone or posting online.
						Sexting is the sending of provocative or sexual photos, images,
						messages or videos using a mobile phone or posting online. Once you
						have sent a picture or message, it is out of your control. Images
						posted online can be almost impossible to remove and they may come
						back to haunt you anywhere and anytime well into the future. There
						is no such thing as safe sexting, even if you think you can trust
						your current girlfriend or boyfriend.Sexting may seem funny or
						flirty but they have serious social and legal consequences in
						Zambia. Sexting images are considered pornography. Even if all
						participants are willing, they will be breaking the law if they take
						and share naked or sexual images of themselves or others who are
						minors. Under Section 102 of the Electronic Communications and
						Transactions ACT transmission or receiving of pornography is
						prohibited. A person who commits an offence under the provisions of
						the said ACT is liable upon conviction to a fine of K36 Million or
						to imprisonment for a period not exceeding 10 years or both.
					</p>
				</div>
				<div>
					<img
						src={'/assets/sexting.png'}
						alt="sexting-image"
						className="w-full h-full object-cover rounded"
					/>
				</div>
			</div>
			<div className="space-y-2 ">
				<h2 className="text-2xl font-medium">How do I deal with it?</h2>
				<p>
					Think before you post the image. It could be online forever Adjust
					your privacy settings—some things were never meant to be shared Manage
					photos or images tagged with your name - detag asap Delete any sexting
					you receive and do Not forward anything on to others Consider others
					before you photograph or post Talk to an adult you trust.
				</p>
			</div>
		</div>
	)
}

export default Sexting
