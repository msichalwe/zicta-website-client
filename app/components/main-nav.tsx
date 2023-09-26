'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getAllServices from '@/actions/getAllServices'

export const MainNav = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	const data = [
		{
			title: 'Home',
		},
		{
			title: 'About',
			items: [
				{
					title: 'About ZICTA',
					description: 'Learn more about ZICTA',
				},
				{
					title: 'Board of Authority',
					description: 'Meet the ZICTA Board of Authority',
				},

				{
					title: 'Management',
					description: 'Meet the ZICTA Management Team',
				},
			],
		},
		{
			title: 'Media',
			items: [
				{
					title: 'News',
					description: 'Keep up to date with the latest news from ZICTA',
				},
				{
					title: 'Events',
					description: 'Real time updates on events happening at ZICTA',
				},
				{
					title: 'Publications',
					description: 'Publications from ZICTA',
				},
				{
					title: 'Annual Reports',
					description: 'ZICTA Annual Reports',
				},
				{
					title: 'Press Releases',
				},
			],
		},
		{
			title: 'Services',

			items: [
				{
					title: 'Licensing',
					description: ' Licensing services.',
				},
				{
					title: 'Consumer Protection',
					description: 'Ensuring fair treatment for consumers.',
				},
				{
					title: 'Technical Regulation',
					description: 'Standards and compliance for technology.',
				},
				{
					title: 'Economic Regulation',
					description: 'Oversight of telecom industry economics.',
				},
				{
					title: 'Service Charter',
					description: 'Guidelines for service quality and standards.',
				},
				{
					title: 'Postal & Courier Regulation',
					description: 'Regulation of postal and courier services.',
				},
			],
		},

		{
			title: 'Resources',

			items: [
				{
					title: 'Legislation',
					description: '',
				},
				{
					title: 'Guidelines',
					description: '',
				},
				{
					title: 'Strategic Plans',
					description: '',
				},
				{
					title: 'Procurement',
				},
			],
		},
		{
			title: 'Online Services',
		},
	]

	return (
		<nav className="text-xs">
			<NavigationMenu className={cn('flex items-center   space-x-2  flex-col')}>
				<NavigationMenuList className={cn('gap-2 ', className)}>
					{data.map((nav) => (
						<NavigationMenuItem>
							{!nav.items ? (
								<Link
									href={
										nav.title.toLowerCase() === 'home'
											? '/'
											: nav.title.toLowerCase() === 'procurement'
											? '/downloads/procurement'
											: nav.title.toLowerCase() === 'online services'
											? '/apply'
											: nav.title.toLowerCase() === 'careers'
											? 'https://zicta.mcidirecthire.com/External/Job?Ref=TEkBhDYErs0qhHgueWeCgt%2fyRI%2bcnPLR1MRk1RR6Cpou3ktpvROhSqni%2fBGkK6j0oVFE%2fv%2b%2bs7ZikC%2fr8Jno6%2bKXdOtrvvTBseO48pRs8yB57ycdvdLzgmNZo5S%2bjJVn0KOcSAYT10kLM0k%2b76eugg%3d%3d'
											: nav.title.toLowerCase().replace(/[\s&]+/g, '-')
									}
									legacyBehavior
									passHref>
									<NavigationMenuLink
										className={cn(
											'bg-transparent md:text-base text-sm hover:bg-transparent focus:bg-transparent',
											navigationMenuTriggerStyle(),
										)}>
										{nav.title}
									</NavigationMenuLink>
								</Link>
							) : (
								<NavigationMenuTrigger className="bg-transparent hover:bg-transparent md:text-base text-sm focus:bg-transparent">
									{nav.title}
								</NavigationMenuTrigger>
							)}
							<NavigationMenuContent>
								<ul className="grid w-[300px] text-xs gap-3 p-4 h-full md:w-[500px] grid-cols-2 lg:w-[600px] ">
									{nav.items?.map((item) => {
										const href = `/${nav.title
											.toLowerCase()
											.replace(/[\s&]+/g, '-')}/${item?.title
											.toLowerCase()
											.replace(/[\s&]+/g, '-')}`

										return (
											<ListItem href={href} title={item?.title}>
												{item?.description}
											</ListItem>
										)
									})}
								</ul>
							</NavigationMenuContent>
						</NavigationMenuItem>
					))}
				</NavigationMenuList>
			</NavigationMenu>
		</nav>
	)
}

const ListItem = React.forwardRef<
	React.ElementRef<'a'>,
	React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<a
					ref={ref}
					className={cn(
						'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
						className,
					)}
					{...props}>
					<div className="text-sm font-medium leading-none">{title}</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
						{children}
					</p>
				</a>
			</NavigationMenuLink>
		</li>
	)
})
ListItem.displayName = 'ListItem'
