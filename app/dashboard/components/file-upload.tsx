'use client'
import { useAppDispatch, useAppSelector } from '@/hooks/hooks'
import { selectFileFormat, setFileFormat } from '@/state'
import axios from 'axios'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { ClipLoader } from 'react-spinners'

interface FileUploadProps {
	onChange: (value: string) => void
	value: string[]
	className?: string
}

const UploadFile: React.FC<FileUploadProps> = ({
	onChange,
	value,
	className,
}) => {
	const [loading, setLoading] = useState(false)
	const [files, setFiles] = useState([]) as any[]

	const dispatch = useAppDispatch()

	const onDrop = useCallback((acceptedFiles: any) => {
		if (acceptedFiles?.length) {
			setFiles((prevFiles: any) => [
				...prevFiles,
				...acceptedFiles.map((file: any) =>
					Object.assign(file, {
						preview: URL.createObjectURL(file),
					}),
				),
			])
		}
	}, [])

	const removeFile = (name: string) => {
		setFiles((files: any) => files.filter((file: any) => file.name !== name))
		onChange('')
	}

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		disabled: false,
		maxFiles: 1,
	})

	const getFileExtension = (fileName: string) => {
		return fileName.split('.').pop()
	}
	const generateSlug = (name: string) => {
		return name
			.toLowerCase()
			.replace(/[^.\w ]+/g, '')
			.replace(/ +/g, '-')
	}

	const FileFormat = useAppSelector(selectFileFormat)

	const handleSubmit = async (e: any) => {
		e.preventDefault()

		const formData = new FormData()
		formData.append('files[]', files[0])
		formData.append('slug', `${generateSlug(files[0].name)}`)

		dispatch(
			setFileFormat(
				// @ts-ignore
				getFileExtension(files[0].name),
			),
		)
		console.log(FileFormat)

		try {
			setLoading(true)
			const config = {
				headers: {
					'Content-Format': 'multipart/form-data', // Set content format for file upload
					Accept: 'application/json', // Set the Accept header to JSON
				},
			}
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_STORAGE_URL}`,
				formData,
				config,
			)

			console.log('response', response.data.file_urls)

			const uploadedUrl = response.data.file_urls

			onChange(uploadedUrl)
			setFiles([])
		} catch (error) {
			console.log('error', error)
		} finally {
			setLoading(false)
		}
	}

	return (
		<div>
			{value.length > 0 ? (
				<div className="relative h-32 w-32 mt-10">
					<Image
						src={
							value[0].includes('pdf')
								? '/assets/pdf-thumb.png'
								: value[0].includes('docx')
								? '/assets/docx-thumb.png'
								: value[0]
						}
						alt="file"
						width={100}
						height={100}
						className="h-full w-full object-cover rounded-md"
					/>
					<button
						type="button"
						className="w-7 h-7 border border-red-400 bg-red-400  rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
						onClick={() => onChange('')}>
						<X className="h-4 w-4 text-white hover:text-red-400 transition-colors" />
					</button>
				</div>
			) : (
				<>
					<div
						{...getRootProps({
							className: className,
						})}>
						<input {...getInputProps()} />
						{isDragActive ? (
							<p className="text-sm text-gray-500 text-center">
								Drop the file here...
							</p>
						) : (
							<p className="text-sm text-gray-500 text-center">
								Drag and drop a file here, or click to select file
							</p>
						)}
					</div>
					<h3 className="title text-sm font-semibold text-neutral-600 mt-10 border-b pb-3">
						Your File:
					</h3>

					<ul>
						{files.map((file: any) => (
							<li
								key={file.name}
								className="relative h-32 w-32 rounded-md shadow-lg">
								<Image
									src={
										getFileExtension(file.name) === 'pdf'
											? '/assets/pdf-thumb.png'
											: getFileExtension(file.name) === 'docx'
											? '/assets/docx-thumb.png'
											: file.preview
									}
									alt="file"
									width={100}
									height={100}
									onLoad={() => {
										URL.revokeObjectURL(file.preview)
									}}
									className="h-full w-full object-cover rounded-md"
								/>
								<button
									type="button"
									className="w-7 h-7 border border-red-400 bg-red-400  rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
									onClick={() => removeFile(file.name)}>
									<X className="h-4 w-4 text-white hover:text-red-400 transition-colors" />
								</button>
								<p className="mt-2 text-neutral-500 text-[12px] font-medium">
									{file.name}
								</p>
							</li>
						))}
					</ul>
				</>
			)}
			{files.length > 0 && (
				<button
					type="button"
					disabled={loading}
					onClick={handleSubmit}
					className={`rounded-md mt-20 bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
						loading ? 'opacity-80' : ''
					}`}>
					{loading ? (
						<span>
							<ClipLoader color="#ffffff" loading={loading} size={15} />
							&nbsp; Uploading...
						</span>
					) : (
						'Upload'
					)}
				</button>
			)}
		</div>
	)
}

export default UploadFile
