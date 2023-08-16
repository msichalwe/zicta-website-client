import React from 'react'

const IdentityTheft = () => {
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
				<div>
					<img
						src={'/assets/identity-theft.jpg'}
						alt="identity-theft-image"
						className="w-full h-full object-cover rounded"
					/>
				</div>

				<div className="flex items-start justify-center space-y-2 flex-col ">

					<h1 className="text-4xl font-medium">Identity Theft</h1>
					<p>
						Identity theft is a crime in which personal information is used
						without the owner's knowledge or permission. Information can be
						accessed from the person's computer or at a public computer
						terminal. With sufficient information, criminals can use it to: Open
						bank accounts using your particulars Apply for debit/credit cards or
						loans in your name Transfer money directly from your bank accounts
						into other accounts Impersonate the victim online on social
						networking sites Identity theft can damage your chances of applying
						for loans and debit/credit cards. How do you avoid Identity theft?
						Monitor your content If your profile has been hacked shut it down
						ASAP Use secure websites for online shopping and banking. Do NOT
						post personal information – small pieces of personal data can be
						used to build a much bigger picture. Passwords To ensure that there
						is no identity theft, certain measures should be taken and
						passwords: Should be eight or more characters in length, preferably
						a mix of Symbols, letters and numbers Should be changed regularly
						Should be kept private Do NOT respond to calls or emails from banks
						asking for passwords or other details. If the email asks you to
						click on a link, chances are that it's a scam, delete it
						immediately. If you receive a call from someone saying they are from
						the bank, hang up and call back on their publicly listed number to
						see if it is real.
					</p>
				</div>
			</div>

			<div className="space-y-2 ">

				<h2 className="text-2xl font-medium">How do I deal with it?</h2>
				<p>
					Watch your bank account and respond immediately to any unexpected
					withdrawals or suspicious spending Report Identity Theft - talk to
					your bank and report to the Police on{' '}
					<span className="font-bold">991. </span>
				</p>
			</div>
		</div>
	)
}

export default IdentityTheft
