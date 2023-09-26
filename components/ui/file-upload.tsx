'use client'

import { CldUploadWidget } from 'next-cloudinary'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ImagePlus, Trash } from 'lucide-react'
import {
	selectFileFormat,
	selectFileType,
	setFileFormat,
	setFileType,
} from '@/state'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'

interface FileUploadProps {
	disabled?: boolean
	onChange: (value: string) => void
	onRemove: (value: string) => void
	value: string[]
}

const FileUpload: React.FC<FileUploadProps> = ({
	disabled,
	onChange,
	onRemove,
	value,
}) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	function getExtensionFromPath(path: any) {
		const extension = path.split('.').pop()
		return extension
	}

	const dispatch = useAppDispatch()
	const fileFormat = useAppSelector(selectFileFormat)
	const thumbnail = useAppSelector(selectFileType)
	const onUpload = (result: any) => {
		
		dispatch(
			setFileFormat(
				result.info.format || getExtensionFromPath(result.info.path),
			),
		)
		dispatch(setFileType(result.info.thumbnail_url))
		onChange(result.info.secure_url)
	}

	if (!isMounted) {
		return null
	}

	return (
		<div>
			<div className="mb-4 flex items-center gap-4">
				{value.map((url) => (
					<div
						key={url}
						className="relative w-[200px] h-[200px] rounded-md overflow-hidden">
						<div className="z-10 absolute top-2 right-2">
							<Button
								type="button"
								onClick={() => onRemove(url)}
								variant="destructive"
								size="sm">
								<Trash className="h-4 w-4" />
							</Button>
						</div>
						<Image fill className="object-cover" alt="Image" src={thumbnail} />
					</div>
				))}
			</div>
			<CldUploadWidget onUpload={onUpload} uploadPreset="zicta_website">
				{({ open }) => {
					const onClick = () => {
						open()
					}

					return (
						<Button
							type="button"
							disabled={disabled}
							variant="secondary"
							onClick={onClick}>
							<ImagePlus className="h-4 w-4 mr-2" />
							Upload a File
						</Button>
					)
				}}
			</CldUploadWidget>
		</div>
	)
}

export default FileUpload
