import Spinner from './components/Spinner'

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="z-50 bg-white h-screen flex items-center flex-col gap-2 justify-center">
			<Spinner />
		</div>
	)
}
