'use client'
import React, { useEffect, useState } from 'react'

const Timer = () => {
	const targetDate = new Date()
	targetDate.setFullYear(new Date().getFullYear())
	targetDate.setMonth(11) // December (month is 0-indexed)
	targetDate.setDate(8)
	targetDate.setHours(0, 0, 0, 0) // start of the day

	// @ts-ignore
	const [time, setTime] = useState(Math.ceil((targetDate - new Date()) / 1000))
	const [daysTens, setDaysTens] = useState(0)
	const [daysOnes, setDaysOnes] = useState(0)
	const [hoursTens, setHoursTens] = useState(0)
	const [hoursOnes, setHoursOnes] = useState(0)
	const [minutesTens, setMinutesTens] = useState(0)
	const [minutesOnes, setMinutesOnes] = useState(0)
	const [secondsTens, setSecondsTens] = useState(0)
	const [secondsOnes, setSecondsOnes] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prevTime) => prevTime - 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	const flip = (setFunction: any, newNumber: any) => {
		setFunction(newNumber)
	}

	const flipAllCards = (time: any) => {
		const seconds = time % 60
		const minutes = Math.floor(time / 60) % 60
		const hours = Math.floor(time / 3600) % 24
		const days = Math.floor(time / 86400)

		flip(setDaysTens, Math.floor(days / 10))
		flip(setDaysOnes, days % 10)
		flip(setHoursTens, Math.floor(hours / 10))
		flip(setHoursOnes, hours % 10)
		flip(setMinutesTens, Math.floor(minutes / 10))
		flip(setMinutesOnes, minutes % 10)
		flip(setSecondsTens, Math.floor(seconds / 10))
		flip(setSecondsOnes, seconds % 10)
	}

	useEffect(() => {
		flipAllCards(time)
	}, [time])
	return (
		<div className="container-timer text-2xl md:text-7xl font-medium mt-20 text-zicta-blue">
			<div className="container-segment">
				<div className="segment-title italic">Days</div>
				<div className="segment">
					<div className="flip-card" data-hours-tens>
						<div className=" bg-white   rounded p-2 md:p-5 text-center">
							{daysTens}
						</div>
					</div>
					<div className="flip-card" data-hours-ones>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{daysOnes}
						</div>
					</div>
				</div>
			</div>
			<div className="container-segment">
				<div className="segment-title italic">Hours</div>
				<div className="segment">
					<div className="flip-card" data-hours-tens>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{hoursTens}
						</div>
					</div>
					<div className="flip-card " data-hours-ones>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{hoursOnes}
						</div>
					</div>
				</div>
			</div>
			<div className="container-segment">
				<div className="segment-title italic">Minutes</div>
				<div className="segment">
					<div className="flip-card" data-minutes-tens>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{minutesTens}
						</div>
					</div>
					<div className="flip-card" data-minutes-ones>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{minutesOnes}
						</div>
					</div>
				</div>
			</div>
			<div className="container-segment ">
				<div className="segment-title italic">Seconds</div>
				<div className="segment">
					<div className="flip-card" data-seconds-tens>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{secondsTens}
						</div>
					</div>
					<div className="flip-card" data-seconds-ones>
						<div className=" bg-white  rounded p-2 md:p-5 text-center">
							{secondsOnes}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Timer
