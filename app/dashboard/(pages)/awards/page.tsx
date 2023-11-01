'use client'
import { fetcher } from '@/lib/fetcher'
import CSVButton from './_components/CSV-button'
import FuzzySet from 'fuzzyset'
import { useState } from 'react'
import useSWR from 'swr'
import Heading from '@/app/components/Heading'
import { Separator } from '@/components/ui/separator'
import { DataTable } from '@/components/ui/data-table'
import { columns } from './_components/column'
import { Combobox } from '@/components/ui/combobox'
import { CSVLink } from 'react-csv'

export const revalidate = 0

const Awards = () => {
	const [awardCategoryId, setAwardCategoryId] = useState(
		'65325172ba031ccbecd07e7c',
	)

	const { data: awardNominations, isLoading } = useSWR(
		`/api/awards/nomination/${awardCategoryId}`,
		fetcher,
	)

	const { data: categories, isLoading: isLoadingCategories } = useSWR(
		'/api/awards/categories',
		fetcher,
	)

	const { data: awards, isLoading: isLoadingAwards } = useSWR(
		'/api/awards/nomination',
		fetcher,
	)

	if (isLoading || isLoadingCategories || isLoadingAwards)
		return <div>Loading...</div>

	const awardsData = awardNominations.map((nominations: any) => {
		return {
			name: nominations.nominee,
			email: nominations.nominee_email,
			phone: nominations?.nominee_phone,
			reason: nominations?.nominee_reason,
			category: nominations.awardCategory.name,
		}
	})

	const formattedAwards = awards.map((award: any) => {
		return {
			name: award.nominee,
			email: award.nominee_email,
			phone: award?.nominee_phone,
			reason: award?.nominee_reason,
			category: award.awardCategory.name,
		}
	})

	const formattedNominees = awardNominations.map((nominations: any) => {
		return {
			name: nominations.nominee,
			email: nominations.nominee_email,
			phone: nominations?.nominee_phone,
			reason: nominations?.nominee_reason,
			category: nominations.awardCategory.name,
		}
	})

	const fuzzyset = FuzzySet(awardsData.map((data: any) => data.name))

	const uniqueNames = {}

	awardsData.forEach((data: any) => {
		// @ts-ignore
		const [score, match] = fuzzyset.get(data.name)[0]

		if (score > 0.8) {
			// @ts-ignore
			if (!uniqueNames[match]) {
				// @ts-ignore
				uniqueNames[match] = 1
			} else {
				// @ts-ignore
				uniqueNames[match]++
			}
		} else {
			// @ts-ignore
			if (!uniqueNames[data.name]) {
				// @ts-ignore
				uniqueNames[data.name] = 1
			} else {
				// @ts-ignore
				uniqueNames[data.name]++
			}
		}
	})

	const uniqueNamesArray = Object.entries(uniqueNames).map(([name, count]) => ({
		name,
		count,
	}))

	const filteredCategory = categories.filter(
		(category: any) => category.id === awardCategoryId,
	)

	return (
		<div>
			<div className="w-5/6 mx-auto pt-16">
				<div className="flex justify-between w-full">
					<Heading
						title={`Nominations (${formattedNominees.length})`}
						description={`Nominations under the category: ${filteredCategory[0].name}`}
					/>
					<div className=" justify-between flex gap-x-2 items-center">
						<div>
							<Combobox
								options={categories.map((category: any) => ({
									label: category.name,
									value: category.id,
								}))}
								placeholder={`${filteredCategory[0].name}`}
								onChange={setAwardCategoryId}
							/>
						</div>
						<CSVButton
							data={uniqueNamesArray}
							name={`${filteredCategory[0].name}.csv`}
						/>
						<CSVLink
							className="bg-zicta-yellow px-4 py-2 text-white rounded"
							data={formattedAwards}
							filename={'list of all nominations.csv'}>
							Export All
						</CSVLink>
					</div>
				</div>
				<Separator className="my-2" />
				<DataTable
					columns={columns}
					data={formattedNominees}
					searchKey="name"
				/>
			</div>
		</div>
	)
}

export default Awards
