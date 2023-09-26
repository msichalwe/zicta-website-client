'use client'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

interface EditorProps {
	value: string
	onChange: (value: string) => void
}

const Editor: React.FC<EditorProps> = ({ value, onChange }) => {
	return (
		<ReactQuill
			style={{ height: '300px', marginBottom: '2rem' }}
			formats={formats}
			modules={modules}
			theme="snow"
			value={value}
			onChange={onChange}
		/>
	)
}

const formats = [
	'header',
	'font',
	'size',
	'bold',
	'italic',
	'underline',
	'strike',
	'blockquote',
	'list',
	'bullet',
	'indent',
	'link',
	'image',
	'color',
	'background',
]

const modules = {
	toolbar: [
		[{ header: [1, 2, false] }],
		['bold', 'italic', 'underline', 'strike', 'blockquote'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
		],
		['link', 'image'],
		['clean'],
	],
}

export default Editor
