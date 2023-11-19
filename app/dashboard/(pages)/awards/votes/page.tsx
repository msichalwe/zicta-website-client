'use client'

import Heading from '@/app/components/Heading'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { fetcher } from '@/lib/fetcher'
import { Loader2, Ticket } from 'lucide-react'
import { CSVLink } from 'react-csv'
import useSWR from 'swr'

const VotesPage = () => {
	const { data: votes, isLoading } = useSWR('/api/awards/vote', fetcher)

	if (isLoading) {
		return (
			<div className="w-full h-screen flex items-center justify-center">
				<Loader2 className="animate-spin h-8 w-8 text-zicta-blue" />
			</div>
		)
	}

	const countVotes = (votes: any) => {
		// @ts-ignore
		return votes.reduce((acc, vote) => {
			Object.keys(vote).forEach((key) => {
				if (
					key !== 'createdAt' &&
					key !== 'voter_email' &&
					vote[key] !== '' &&
					key !== 'id' &&
					key !== 'updatedAt' &&
					vote[key] !== null
				) {
					if (!acc[key]) {
						acc[key] = {}
					}
					if (!acc[key][vote[key]]) {
						acc[key][vote[key]] = 0
					}
					acc[key][vote[key]] += 1
				}
			})
			return acc
		}, {})
	}

	const votesCount = countVotes(votes)

	return (
		<div className="flex-col w-5/6 mx-auto">
			<div className="flex-1 space-y-4 py-6">
				<Heading title="Votes" description="Votes for the awards" />
				<Separator />
			</div>
			<div className="grid gap-4 grid-cols-3">
				<Card>
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium">Total Voters</CardTitle>
						<Ticket className="h-4 w-4 text-muted-foreground" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold">{votes.length}</div>
					</CardContent>
				</Card>
				{Object.entries(votesCount).map(([award, companies]) => (
					<Card key={award}>
						<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
							<CardTitle className="text-lg font-medium uppercase">
								{award.replace(/_/g, ' ')}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<Awards awards={companies} />
						</CardContent>
						<CardFooter></CardFooter>
					</Card>
				))}
			</div>
		</div>
	)
}

export default VotesPage

const Awards = ({ awards }: any) => {
	const csvData = Object.entries(awards).map(([company, votes]) => ({
		company: company.replace(/_/g, ' '),
		votes,
	}))
	return (
		<>
			<div className="space-y-3 mb-10">
				{Object.entries(awards).map(([company, votes]) => (
					<div key={company} className="flex gap-5 ">
						<h2>{company} :</h2>
						{/* @ts-ignore */}
						<p className="font-medium">{votes}</p>
					</div>
				))}
			</div>
			<CSVLink
				className="bg-zicta-blue px-4 py-2 rounded text-white mt-10"
				data={csvData}
				filename={'category_votes.csv'}>
				Export
			</CSVLink>
		</>
	)
}
