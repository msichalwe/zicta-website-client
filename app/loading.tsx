import Loader from '@/components/ui/loader'

export default function Loading() {
	// You can add any UI inside Loading, including a Skeleton.
	return (
		<div className="z-[2000] h-screen flex items-center flex-col gap-2 justify-center">
			<Loader />
		</div>
	)
}
