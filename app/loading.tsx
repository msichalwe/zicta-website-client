import { ClipLoader } from 'react-spinners'

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="z-[2000] bg-white h-screen flex items-center flex-col gap-2 justify-center">
			<ClipLoader color="#36d7b7" /> Loading...
		</div>
	)
}
