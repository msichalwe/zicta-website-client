import React from 'react'

import prisma from '@/lib/prismadb'
import { WhatWeDoCardForm } from './components/whatWeDoCard-form'

const WhatWeDosPage = async ({
	params,
}: {
	params: { whatWeDoId: string }
}) => {
	const whatWeDo = await prisma.whatWeDoCard.findUnique({
		where: {
			id: params.whatWeDoId,
		},
	})
	return (
		<div className="flex-col">
			<div className="flex-1 space-y-4 p-8 pt-6">
				<WhatWeDoCardForm initialData={whatWeDo} />
			</div>
		</div>
	)
}

export default WhatWeDosPage
