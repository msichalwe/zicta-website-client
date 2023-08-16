import { string } from 'zod'

interface WhatWeDo {
	title: string
	description: string
	whatWeDoCard: WhatWeDoCard[]
}

interface WhatWeDoCard {
	title: string
	content: string
}

interface HeroImage {
	id: string
	url: string
}

interface Hero {
	title: string
	content: string
	images: HeroImage[]
	buttonText: string
}

interface Banner {
	title: string
	description?: string
	imageUrl: string
}

interface Service {
	title: string
	description: string
	content: string
	imageUrl: string
	type: string
	subServices?: SubService[]
}

interface SubService {
	title: string
	description: string
	imageUrl?: string
	content: string
}

interface Testimonial {
	name: string
	content: string
	imageUrl: string
	title: string
}

interface About {
	id: string
	title: string
	description: string
	content: string
	imageUrl: string
}

interface Faq {
	id: string
	question: string
	answer: string
}

interface Stats {
	title: string
	description: string
	stat: Stat[]
}

interface Stat {
	id: string
	name: string
	value: string
	showPlus: boolean
}

interface Resource {
	id: string
	title: string
	type?: string
	fileUrl: string
	fileType?: string
	createdAt: string
}
interface Procurement {
	id: string
	title: string
	type: string
	fileUrl: string
	fileType: string
	createdAt: string
}

interface Service {
	id: string
	title: string
	description: string
	content: string
	imageUrl: string
	type: string
	subServices: SubService[]
}

interface SubService {
	id: string
	title: string
	description: string
	content: string
	imageUrl: string
}

interface Media {
	id: string
	title: string
	description: string
	content: string
	imageUrl: string
	type: string
	createdAt: string
	category: Category
}

interface Category {
	id: string
	title: string
	description: string
}
