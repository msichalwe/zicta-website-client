import NextAuth, { AuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { PrismaAdapter } from '@next-auth/prisma-adapter'

import prisma from '@/lib/prismadb'

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: 'email', type: 'text' },
				password: { label: 'password', type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) {
					throw new Error('Invalid credentials')
				}


				const user = await prisma.user.findUnique({
					where: { email: credentials.email },
				})

				if (!user || !user?.hashedPassword) {
					throw new Error('Invalid credentials')
				}

				const isCorrectPassword = await bcrypt.compare(
					credentials.password,
					user.hashedPassword,
				)

				if (!isCorrectPassword) {
					throw new Error('Invalid credentials')
				}

				return user
			},
		}),
	],
	debug: process.env.NODE_ENV === 'development',
	session: {
		strategy: 'jwt',
	},
	secret: process.env.NEXTAUTH_SECRET as string,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
