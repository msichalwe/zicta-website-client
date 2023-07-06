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
	const params = useParams()
	const routes = [
		{
			href: `/dashboard`,
			label: 'Dashboard',
			active: pathname === '/dashboard',
		},
		{
			href: `/dashboard/properties`,
			label: 'Properties',
			active: pathname === '/dashboard/properties',
		},
		{
			href: `/dashboard/settings`,
			label: 'Settings',
			active: pathname === '/dashboard/settings',
		},
	]
	return (
		<nav className={cn('flex items-center space-x-4 lg:space-x-6', className)}>
			<NavigationMenu>
				<NavigationMenuList className="gap-2">
					{data.map((item) => (
						<NavigationMenuItem>
							{!item.navbarDropdown ? (
								<Link
									href={
										item.navTitle.toLowerCase() === 'home'
											? '/'
											: item.navTitle.toLowerCase()
									}
									legacyBehavior
									passHref>
									<NavigationMenuLink className={navigationMenuTriggerStyle()}>
										{item.navTitle}
									</NavigationMenuLink>
								</Link>
							) : (
								<NavigationMenuTrigger>{item.navTitle}</NavigationMenuTrigger>
							)}
							<NavigationMenuContent>
								{item.navbarDropdown?.items.map((nav) => (
									<ul className="grid gap-2 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
										<ListItem
											href={`/${nav.title.toLowerCase()}`}
											title={nav.title}>
											{nav?.description}
										</ListItem>
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
		navTitle: 'Home',
	},
	{
		navTitle: 'About',
		navbarDropdown: {
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
	},
	{
		navTitle: 'Media',
		navbarDropdown: {
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
	},
	{
		navTitle: 'Services',
		navbarDropdown: {
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
				},
			],
		},
	},
	{
		navTitle: 'Departments',
		navbarDropdown: {
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
				},
			],
		},
	},
	{
		navTitle: 'Contact',
	},
]
