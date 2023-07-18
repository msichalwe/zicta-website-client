'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import React from 'react'
import { useQuery } from '@tanstack/react-query'
import getAllServices from '@/actions/getAllServices'

export const MainNav = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	const pathname = usePathname()
	const { data: services, isLoading } = useQuery({
		queryKey: ['servicesData'],
		queryFn: getAllServices,
	})

	const data = [
		{
			title: 'Home',
		},
		{
			title: 'About',
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
			],
		},
		{
			title: 'Services',

			items: services?.map((item) => ({
				title: item.title,
				description: item.description,
			})),
		},
		// {
		// 	title: 'Departments',

		// 	items: [
		// 		{
		// 			title: 'Cyber Security',
		// 			description:
		// 				'The cybersecurity department is responsible for the security of the internet',
		// 		},
		// 		{
		// 			title: 'Universal Access',
		// 			description:
		// 				'Universal access is the deparment that enables all citizens to access the internet',
		// 		},
		// 		{
		// 			title: 'Technology and Engineering',
		// 			description:
		// 				'Technology and Engineering is the department that is responsible for the development of technology',
		// 		},
		// 	],
		// },
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
				,
				{
					title: 'Press Releases',
				},
			],
		},
	]

	return (
		<nav>
			<NavigationMenu
				className={cn('flex items-center space-x-4 lg:space-x-6 flex-col')}>
				<NavigationMenuList className={cn('gap-2 ', className)}>
					{data.map((nav) => (
						<NavigationMenuItem>
							{!nav.items ? (
								<Link
									href={
										nav.title.toLowerCase() === 'home'
											? '/'
											: nav.title.toLowerCase() === 'about'
											? '/about'
											: nav.title.toLowerCase() === 'complaints & queries'
											? '/complaints-queries'
											: nav.title.toLowerCase().replace(/[\s&]+/g, '-')
									}
									legacyBehavior
									passHref>
									<NavigationMenuLink
										className={cn(
											'bg-transparent hover:bg-transparent focus:bg-transparent',
											navigationMenuTriggerStyle(),
										)}>
										{nav.title}
									</NavigationMenuLink>
								</Link>
							) : (
								<NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
									{nav.title}
								</NavigationMenuTrigger>
							)}
							<NavigationMenuContent>
								<ul className="grid w-[300px] gap-3 p-4 h-full md:w-[500px] grid-cols-2 lg:w-[600px] ">
									{nav.items?.map((item) => {
										const href = `/${nav.title.toLowerCase()}/${item?.title
											.toLowerCase()
											.replace(/ /g, '-')}`

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
