import React from 'react'

const UnwantedContact = () => {
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
				<div className="flex items-start justify-center space-y-2 flex-col">
					<h1 className="text-4xl font-medium">Unwanted Contact</h1>
					<p>
						What is it? Unwanted contact is any type of online communication
						that you find unpleasant or confronting. The contact can come from
						online friends you don't know or someone you know in the offline
						world.
					</p>
					<p>
						Unwanted contact can include: Being asked inappropriate or personal
						questions by someone you don't know Being sent offensive,
						confronting or obscene content Being asked to send intimate pictures
						or do things online that make you feel uncomfortable.
					</p>
				</div>
				<div>
					<img
						src={'/assets/unwanted-contact.jpeg'}
						alt="unwanted-contact-image"
						className="w-full h-full object-cover rounded"
					/>
				</div>
			</div>
			<div className="space-y-2">
				<h2 className="text-2xl font-medium">How do I deal with it?</h2>
				<p>
					Tell someone you trust, like your Mother, Father or another adult
					Don't respond and leave the site or chat session immediately Block the
					contact or remove them from your friend's list Change your profile
					settings so that your personal details are kept private Don't open
					messages from people you don't know Keep the evidence. This can be
					useful in tracking the person posting unsuitable material Contact your
					Internet Service Provider (ISP) and/or phone provider, or the website
					administrator. There are actions they can take to help Most
					importantly - Report it. Talk to an adult that you trust or to the
					police if there is a threat to your safety. Suspicious online behavior
					towards a child should be reported to the Zambia Police Service, call{' '}
					<strong>991</strong>
				</p>
			</div>
		</div>
	)
}

export default UnwantedContact
