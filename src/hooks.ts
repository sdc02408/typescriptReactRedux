import {TypeUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch } from './store'
import App from './App'

export const useAppDispatch = ()=> useDispatch<AppDispatch>()
export const useAppSelector: TypeUseSelectorHook<RootState> = useSelector

