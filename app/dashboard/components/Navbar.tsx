'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import Image from 'next/image'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { LogOut, Settings2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useRouter } from 'next/navigation'

type NavbarProps = {}

const Navbar: React.FC<NavbarProps> = () => {
	const session = useSession()
	const userProfileImg = session?.data?.user?.image as string

	const router = useRouter()

	return (
		<div className="bg-white text-zicta-blue sticky">
			<div className="flex h-16 items-center px-4">
				<div
					onClick={() => router.push('/')}
					className="mx-auto sm:mx-10 cursor-pointer">
					<Image
						src="/assets/logo.png"
						alt="ZICTA Logo"
						width={50}
						height={50}
						className="cursor-pointer"
					/>
				</div>
				<div className="ml-auto flex items-center justify-center ">
					<p className="pr-2 text-sm font-semibold hidden sm:block">
						{session?.data?.user?.email}
					</p>
					<div>
						<DropdownMenu>
							<DropdownMenuTrigger>
								<Avatar>
									<AvatarImage
										alt={session?.data?.user?.name as string}
										src={userProfileImg}
									/>
									<AvatarFallback className="text-zicta-blue font-medium">
										{session?.data?.user?.email?.charAt(0).toUpperCase()}
									</AvatarFallback>
								</Avatar>
							</DropdownMenuTrigger>
							<DropdownMenuContent>
								<DropdownMenuItem
									onClick={() =>
										// @ts-ignore
										router.push(`/dashboard/settings/${session?.data?.user.id}`)
									}>
									<Settings2 className="mr-2 h-4 w-4" />
									<span>Settings</span>
								</DropdownMenuItem>
								<DropdownMenuItem onClick={() => signOut()}>
									<LogOut className="mr-2 h-4 w-4" />
									<span>Log out</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar
