import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface initialStateProps {
	openMenu: boolean
}

const initialState: initialStateProps = {
	openMenu: false,
}

export const openMenuSlice = createSlice({
	name: 'open',
	initialState,
	reducers: {
		setOpenMenu: (state, action: PayloadAction<boolean>) => {
			state.openMenu = action.payload
		},
	},
})

export const { setOpenMenu } = openMenuSlice.actions
export const selectOpenMenu = (state: RootState) => state.openMenu.openMenu

export default openMenuSlice.reducer
