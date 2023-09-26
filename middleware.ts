import { NextResponse } from 'next/server'
import { withAuth } from 'next-auth/middleware'

export default withAuth({
	pages: {
		signIn: '/login',
	},
})

// specify the path regex to apply the middleware to
export const config = {
	matcher: ['/dashboard/:path*'],
}
