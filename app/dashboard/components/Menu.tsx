import type { MenuProps } from 'antd'
import { Menu as MenuUI } from 'antd'
import Link from 'next/link'
import {
	LayoutDashboard,
	Library,
	FolderCog,
	ScrollText,
	Paperclip,
	Layers,
	Folder,
} from 'lucide-react'

import React, { useState } from 'react'

const items: MenuProps['items'] = [
	{
		label: <Link href="/dashboard">Dashboard</Link>,
		key: 'dashboard',
		icon: <LayoutDashboard className="h-4 w-4 text-zicta-blue" />,
	},
	{
		label: 'Media',
		key: 'media',
		icon: <Library className="h-4 w-4 text-zicta-blue" />,
		children: [
			{
				label: <Link href="/dashboard/media/news">News</Link>,
				key: 'news',
			},
			{
				label: <Link href="/dashboard/media/events">Events</Link>,
				key: 'events',
			},
			{
				label: <Link href="/dashboard/media/projects">Projects</Link>,
				key: 'projects',
			},
			{
				label: (
					<Link href="/dashboard/resources/publications">Publications</Link>
				),
				key: 'publications',
			},
		],
	},
	{
		label: 'Services',
		key: 'services',
		icon: <FolderCog className="h-4 w-4 text-zicta-blue" />,
		children: [
			{
				label: (
					<Link href="/dashboard/services-page/consumer-protection">
						Consumer Protection
					</Link>
				),
				key: 'consumer-protection',
			},
			{
				label: (
					<Link href="/dashboard/services-page/economic-regulation">
						Economic Regulation
					</Link>
				),
				key: 'economic-regulation',
			},
			{
				label: (
					<Link href="/dashboard/services-page/technical-regulation">
						Technical Regulation
					</Link>
				),
				key: 'technical-regulation',
			},
			{
				label: <Link href="/dashboard/services-page/licensing">Licensing</Link>,
				key: 'licensing',
				children: [
					{
						label: (
							<Link href="/dashboard/services-page/licensing-updates">
								Updates
							</Link>
						),
						key: 'updates',
					},
					{
						label: (
							<Link href="/dashboard/services-page/licensing-registers">
								Registers
							</Link>
						),
						key: 'registers',
					},
				],
			},
			{
				label: (
					<Link href="/dashboard/services-page/postal-courier">
						Postal & Courier
					</Link>
				),
				key: 'postal-courier',
			},
			{
				label: (
					<Link href="/dashboard/services-page/service-providers">
						Service Providers
					</Link>
				),
				key: 'service-providers',
			},
		],
	},
	{
		label: <Link href="/dashboard/categories">Categories</Link>,
		key: 'categories',
		icon: <ScrollText className="h-4 w-4 text-zicta-blue" />,
	},
	{
		label: 'Resources',
		key: 'resources',
		icon: <Paperclip className="h-4 w-4 text-zicta-blue" />,
		children: [
			{
				label: <Link href="/dashboard/resources/legislation">Legislation</Link>,
				key: 'legislation',
			},
			{
				label: <Link href="/dashboard/resources/guidelines">Guidelines</Link>,
				key: 'guidelines',
			},
			{
				label: (
					<Link href="/dashboard/resources/strategic-plans">
						Strategic Plans
					</Link>
				),
				key: 'strategic-plans',
			},
			{
				label: (
					<Link href="/dashboard/resources/press-releases">Press Releases</Link>
				),
				key: 'press-releases',
			},
			{
				label: <Link href="/dashboard/resources/procurement">Procurement</Link>,
				key: 'procurement',
			},
			{
				label: (
					<Link href="/dashboard/resources/annual-reports">Annual Reports</Link>
				),
				key: 'annual-reports',
			},
		],
	},
	{
		label: 'Pages',
		key: 'pages',
		icon: <Layers className="h-4 w-4 text-zicta-blue" />,
		children: [
			{
				label: <Link href={'/dashboard/home-page'}>Home</Link>,
				key: 'home-page',
				children: [
					{
						label: <Link href={'/dashboard/home-page/banner'}>Banner</Link>,
						key: 'banner',
					},
				],
			},
			{
				label: <Link href={'/dashboard/about'}>About</Link>,
				key: 'about',
				children: [
					{
						label: <Link href={'/dashboard/about/management'}>Management</Link>,
						key: 'management',
					},
					{
						label: (
							<Link href={'/dashboard/about/board-of-authority'}>
								Board of Authority
							</Link>
						),
						key: 'board-of-authority',
					},
				],
			},
			{
				label: (
					<Link href={'/dashboard/complaints-queries'}>
						Complaints & Queries
					</Link>
				),
				key: 'complaints-queries',
			},
			{
				label: <Link href={'/dashboard/ict-stats'}>ICT Statistics</Link>,
				key: 'ict-stats',
			},
			{
				label: <Link href={'/dashboard/awards'}>Awards</Link>,
				key: 'awards',
			},
			{
				label: <Link href={'/dashboard/faqs'}>FAQs</Link>,
				key: 'faqs',
			},
		],
	},
	{
		label: <Link href={'/dashboard/awards'}>Awards</Link>,
		key: 'awards',
	},
]
const rootSubmenuKeys = [
	'dashboard',
	'media',
	'services',
	'categories',
	'resources',
	'pages',
]
const Menu = () => {
	const [openKeys, setOpenKeys] = useState(['dashboard'])

	const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
		if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
			setOpenKeys(keys)
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
		}
	}
	return (
		<MenuUI
			className="gap-x-2"
			openKeys={openKeys}
			onOpenChange={onOpenChange}
			theme="light"
			mode="inline"
			items={items}
			style={{
				height: '100%',
				justifyContent: 'around',
				display: 'flex',
				paddingTop: '100px',
				alignContent: 'center',
				flexDirection: 'column',
				columnGap: '0.5rem',
				textAlign: 'left',
				color: '#313180',
			}}
		/>
	)
}

export default Menu
