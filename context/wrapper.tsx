'use client'
import { useEffect, useState } from 'react'
import { Layout } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { Header, Content } from 'antd/es/layout/layout'
import Menu from '@/app/dashboard/components/Menu'
import Navbar from '@/app/dashboard/components/Navbar'
import { UserProvider } from './user-context'
import { useSession } from 'next-auth/react'

type WrapperContextProps = {
	children: React.ReactNode
}

const siderStyle: React.CSSProperties = {
	textAlign: 'center',
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#3ba0e9',
	position: 'sticky',
}

const WrapperContext: React.FC<WrapperContextProps> = ({ children }) => {
	const session = useSession()

	const user = {
		email: session?.data?.user?.email,
	}
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) {
		return null
	}
	return (
		<>
			{/* <Navbar /> */}
			<Layout hasSider>
				<UserProvider value={user}>
					<Sider theme="light">
						<Menu />
					</Sider>
				</UserProvider>

				<Layout style={{ height: '100vh' }}>
					<Header style={{ backgroundColor: 'white', position: 'sticky' }}>
						<Navbar />
					</Header>
					<Content style={{ padding: 16, overflow: 'auto' }}>
						{children}
					</Content>
				</Layout>
			</Layout>
		</>
	)
}

export default WrapperContext
