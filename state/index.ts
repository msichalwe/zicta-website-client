import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface initialStateProps {
	openMenu: boolean
	fileType: string
	fileFormat: string
}

const initialState: initialStateProps = {
	openMenu: false,
	fileType: '',
	fileFormat: '',
}

export const openMenuSlice = createSlice({
	name: 'open',
	initialState,
	reducers: {
		setOpenMenu: (state, action: PayloadAction<boolean>) => {
			state.openMenu = action.payload
		},
		setFileType: (state, action: PayloadAction<string>) => {
			state.fileType = action.payload
		},
		setFileFormat: (state, action: PayloadAction<string>) => {
			state.fileFormat = action.payload
		},
	},
})

export const { setOpenMenu, setFileFormat, setFileType } = openMenuSlice.actions
export const selectOpenMenu = (state: RootState) => state.file.openMenu
export const selectFileFormat = (state: RootState) => state.file.fileFormat
export const selectFileType = (state: RootState) => state.file.fileType

export default openMenuSlice.reducer

// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from './store'

// interface initialStateProps {
// 	fileType: string
// 	fileFormat: string
// }

// const initialState: initialStateProps = {
// 	fileType: '',
// 	fileFormat: '',
// }

// export const fileSlice = createSlice({
// 	name: 'file',
// 	initialState,
// 	reducers: {
// 		setFileType: (state, action: PayloadAction<string>) => {
// 			state.fileType = action.payload
// 		},
// 		setFileFormat: (state, action: PayloadAction<string>) => {
// 			state.fileFormat = action.payload
// 		},
// 	},
// })

// export const { setFileFormat, setFileType } = fileSlice.actions

// export const selectFileFormat = (state: RootState) => state.file.fileFormat
// export const selectFileType = (state: RootState) => state.file.fileType
// export default fileSlice.reducer
