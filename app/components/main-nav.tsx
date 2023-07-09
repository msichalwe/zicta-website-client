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

export const MainNav = ({
	className,
	...props
}: React.HTMLAttributes<HTMLElement>) => {
	const pathname = usePathname()

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
											: nav.title.toLowerCase()
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
								{nav.items?.map((item) => (
									<ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
										<li>
											<ListItem
												href={`/${item.title.toLowerCase()}`}
												title={item.title}>
												{item?.description}
											</ListItem>
										</li>
									</ul>
								))}
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

const data = [
	{
		title: 'Home',
	},
	{
		title: 'About',
		items: [
			{
				title: 'Action',
				description: 'This is a description',
			},
			{
				title: 'Another action',
				description: 'This is a description',
			},
			{
				title: 'Something else here',
				description: 'This is a description',
			},
		],
	},
	{
		title: 'Media',
		items: [
			{
				title: 'Action',
				description: 'This is a description',
			},
			{
				title: 'Another action',
				description: 'This is a description',
			},
			{
				title: 'Something else here',
				description: 'This is a description',
			},
		],
	},
	{
		title: 'Services',

		items: [
			{
				title: 'Consumer Protection',
				description: 'complaints, disputes, and other consumer issues',
			},
			{
				title: 'Cloud Security',
				description: 'Cloud security is the protection of data stored online',
			},
			{
				title: 'Economic Regulation',
				description: 'Economic regulation is defined as a type of government',
			},
			{
				title: 'Cloud Service',
				description:
					'Cloud services are any services that are made available to users',
			},
			{
				title: 'Analytics',
				description:
					'Analytics is the systematic computational analysis of data or statistics',
			},
			{
				title: 'Analytics',
				description:
					'Analytics is the systematic computational analysis of data or statistics',
			},
		],
	},
	{
		title: 'Departments',

		items: [
			{
				title: 'Cyber Security',
				description:
					'The cybersecurity department is responsible for the security of the internet',
			},
			{
				title: 'Universal Access',
				description:
					'Universal access is the deparment that enables all citizens to access the internet',
			},
			{
				title: 'Technology and Engineering',
				description:
					'Technology and Engineering is the department that is responsible for the development of technology',
			},
		],
	},
	{
		title: 'Contact',
	},
]
