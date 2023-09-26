import Image from 'next/image'
import Link from 'next/link'

export const RichTextComponents = {
	lists: {
		bullet: ({ children }: any) => (
			<ul className="ml-10 list-desc space-y-5">{children}</ul>
		),
		number: ({ children }: any) => (
			<ol className="mt-lg  list-decimal">{children}</ol>
		),
	},
	block: {
		h1: ({ children }: any) => (
			<h1 className="text-5xl py-5 font-bold"> {children} </h1>
		),
		h2: ({ children }: any) => (
			<h2 className="text-4xl py-5 font-bold"> {children} </h2>
		),
		h3: ({ children }: any) => (
			<h3 className="text-3xl py-5 font-bold"> {children} </h3>
		),
		h4: ({ children }: any) => (
			<h4 className="text-2xl py-5 font-bold"> {children} </h4>
		),
		blockquote: ({ children }: any) => (
			<blockquote className="border-l-primary-500 border-l-4 pl-5 py-5 my-5 ">
				{' '}
				{children}{' '}
			</blockquote>
		),
	},
	marks: {
		link: ({ children, value }: any) => {
			const rel = !value.href.startsWith('/')
				? 'noopener noreferrer'
				: undefined

			return (
				<Link
					rel={rel}
					className="underline decoration-primary-500 hover:decoration-black"
					href={value.href}>
					{children}
				</Link>
			)
		},
	},
}
