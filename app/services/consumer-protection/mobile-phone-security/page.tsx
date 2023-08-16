import React from 'react'

const PhoneSecurity = () => {
	return (
		<div>
			<div className="grid grid-cols-1 mb-10 lg:grid-cols-2 gap-10 ">
				<div>
					<img
						src={'/assets/mobile-security.jpg'}
						alt="identity-theft-image"
						className="w-full h-full object-cover rounded"
					/>
				</div>
				<div className="flex items-start justify-center space-y-2 flex-col ">
					<h1 className="text-4xl font-medium">Mobile Phone Security</h1>
					<p>
						The loss or theft of a mobile is a major concern to most users or
						consumers. This is because most mobile phones contain a lot of
						sensitive data of personal and financial nature. Furthermore most
						mobile phones are purchased at great cost and thus represent a
						monetary investment. Most mobile phones users store data on their
						phones either on the phone’s Internal or external memory (on handset
						or on Subscriber Identity Module—SIM card). The Simcard is used for
						storage of contacts and short messages while memory capacity of the
						handset is used for the storage of data relating to personal photos,
						emails and calendar items. In both cases, unless access to this data
						is protected by a PIN number, it is easily accessible by
						unauthorized persons.
					</p>
				</div>
			</div>
			<div className="space-y-2 ">
				<h2 className="text-2xl font-medium">
					Personal Identification number (PIN)
				</h2>
				<p>
					Your mobile phone SIM card will contain a PIN that can help protect
					your phone from unauthorized usage. Your PIN is located on the scratch
					panel when you first purchase your SIM card. For added security, it’s
					always best to change your PIN when you first obtain your SIM card.
					Your mobile phone manual will show you how to change the PIN.
					<div className="mb-5" />
					Locking your mobile phone to your Simcard SIM-locking your mobile
					phone is a security precaution that you can set (refer to your user
					manual for instructions). When this feature is activated, a PIN will
					have to be entered on the handset keypad before it can be used with
					another SIM card. Activating this feature will minimize the use of
					your handset by unauthorized parties. When creating passwords users
					should note that 8-digit passwords are more secure than 4-digit ones.
					<div className="mb-5" />
					Users are also advised to use the built in automatic phone-lock system
					with which most phones are supplied with and which activates after a
					stipulated time lapse, for, instance,30 seconds. The latter is
					effective in protecting sensitive data as that contained in incoming
					emails-many of which are corporate or business in nature
					<div className="mb-5" />
					locking your SIM card Your SIM card also has a security feature that
					requires a PIN to be entered each time the mobile phone is turned on.
					Calls cannot be made using your SIM card without entering this PIN.
					The PIN is for the SIM card only, not the mobile phone. So if the SIM
					is put into another phone, the PIN for the SIM card will need to be
					entered before any calls can be made. The SIM card is identified by
					the network by its electronic serial number-the International Mobile
					Subscriber Identity (IMSI) number. PIN numbers are generally 4 –digit
					numbers which are only known to the users of mobile phone. By using
					this method of data security, the users ensure that even if a phone
					stolen or lost the data cannot be accessed.
				</p>
			</div>
			<div className="space-y-2  mt-10">
				<h2 className="text-2xl font-medium">More Useful Tips</h2>
				<p>
					Tips on Safeguarding your Mobile phone please ensure the following to
					protect your mobile phone from theft or abuse: Avoid leaving the
					mobile phone in the car unattended Consider insuring your phone,
					noting that to replace it would be costly Keep it in a safe place and
					out of sight Only give your number to people you trust Avoid using it
					in the street. If you need to make a call in a public place be
					discrete When walking alone, put your phone on ‘silent’ or ‘vibrate’
					only mode so that the ring tone does attract attention Security mark
					your phone with a unique code If you have a blue tooth or Wi-Fi
					enabled phone install antivirus software Always keep mobile phones out
					of reach of very young children International Mobile Equipment
					Identity (IMEI) number Each mobile phone has an individual serial
					number called the IMEI number, which can be identified by the mobile
					phone service provider’s network. It is a 15-digit number on the back
					of your handset under the battery and can be found on most handsets by
					pressing *#06# on your phone keypad. The IMEI will appear on the
					screen. You may need to scroll down to see the whole number.
					<div className="mb-5" />
					You should record your IMEI number in case your mobile phone is lost
					or stolen. Your mobile phone service provider may liaise with the
					police about a lost or stolen handset and, if found, your handset will
					be able to be identified by the number. The Authority will soon issue
					regulations on blocking of stolen mobile phones against future use
					with any simcard on any Zambian GSM Network in order to act as a
					deterrent to potential thieves. Should you recover your phone, your
					network provider can also unblock it so as to restore the phone to
					normal use. What to do if your mobile –phone is lost or stolen
					<div className="mb-5" />
					If your mobile phone is lost or stolen, contact your mobile phone
					service provider immediately to suspend your service and prevent
					unauthorized calls being made or billed to you. Your provider will
					block your SIM card and IMEI number to prevent your phone from being
					used on any Zambian mobile network. Report the loss or theft to the
					police, providing identification numbers for your SIM card and IMEI
					number and obtain a search warrant. This information may assist the
					police in the recovery of your mobile phone. Blocking your phone does
					not cancel your contract. So, if you block your mobile phone, you are
					still required to honor your mobile phone contract (postpaid
					customers). Interference of Program of Mobile Device Any person or
					licensee who interferes with the programming of a Mobile phone device
					or modifies the IMEI ID commits an office under the ICT Act and is
					liable to a fine of not exceeding one hundred thousand penalty units
					or to imprisonment for a period not exceeding one (1) year, or both.
					Useful TIPS To retrieve serial number press*#06# on your phone keypad
					Record the serial number of your phone in the diary, notebook or paper
					and store in safe place. Report the lost /stolen phone to the police.
					Ensure to give the police the serial number, the make and model of the
					phone Obtain search warrant in order to assist in the recovery of the
					phone Report to your service provider lost/stolen phone in order to
					block SIM card and IMEI number Request for simcard replacement
				</p>
			</div>
		</div>
	)
}

export default PhoneSecurity
