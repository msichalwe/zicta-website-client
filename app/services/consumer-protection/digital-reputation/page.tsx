import React from 'react'

const DigitalReputation = () => {
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
				<div>
					<img
						src={'/assets/digital-reputation.jpg'}
						alt="identity-theft-image"
						className="w-full h-full object-cover rounded"
					/>
				</div>

				<div className="flex  items-start justify-center space-y-2 flex-col">

					<h1 className="text-4xl font-medium">Digital Reputation</h1>
					<p>
						What is digital reputation? Digital reputation is defined as
						behavior in the online environment and by the content that you post
						about yourself and others. Tagged photos, blog posts and social
						networking interactions will all shape how you are perceived by
						others online and offline (in your social and professional life). A
						poor digital reputation can affect your friendships and
						relationships as well as your future job prospects. What happens
						online can permanently affect you, so protect your digital
						reputation.
					</p>
				</div>
			</div>

			<div className="space-y-2 ">

				<h2 className="text-2xl font-medium">
					How do I protect my digital reputation?
				</h2>
				<p>
					Think before you post Set your profile to private and check every now
					and then to make sure the settings have not changed Keep an eye on
					photos tagged by your friends Do not respond to offensive or illegal
					content Remember, online information could be there forever. Your
					personal information may end up being seen by people you do not know,
					including potential employers.
				</p>
			</div>

			<div className=" space-y-2 mt-5">

				<h2 className="font-medium ">What is offensive or illegal content?</h2>
				<ul className="list-disc list-inside">
					<li>Extremely violent</li>
					<li>Sexually explicit</li>
					<li>Promoting unsafe behavior</li>
					<li> Promoting criminal activity</li>
					<li>Racism</li>
				</ul>
				<p>
					If you come across websites and other material that is offensive,
					obscene or illegal, there are some easy ways to handle it: <br />{' '}
					Report it to the site you are on If you think the content might be
					illegal you can report to Zambia Police, dial 991 Talk to someone you
					trust Know how to 'escape' Hit control-alt-delete if the site will not
					allow you to exit Surf on - If there is a warning page for under 18's,
					leave the site Use a filter to block offensive or adult material.
				</p>
			</div>
		</div>
	)
}

export default DigitalReputation
