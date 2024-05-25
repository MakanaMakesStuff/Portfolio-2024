import { gql, useQuery } from "@apollo/client"
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
	useState,
} from "react"

const AppContext = createContext({})

export const useAppContext = () => useContext(AppContext) as AppContextProps

export interface AppContextProps {
	state: AppContextState
	setState: Dispatch<SetStateAction<AppContextState>>
	actions: AppContextActions
}

export interface AppContextState {
	viewer?: Viewer
	generalSettings?: GeneralSettings
}

export interface Viewer {
	id: number
	firstName: string
	lastName: string
	userId: number
	username: string
}

export interface GeneralSettings {
	title: string
	timezone: string
}

export interface AppContextActions {
	loading: boolean
	error: boolean
}

export default function AppContextProvider({
	children,
}: {
	children: ReactNode
}) {
	const [state, setState] = useState<AppContextState>({})

	const { data } = useQuery(AppQuery)

	return <AppContext.Provider value={{ state }}>{children}</AppContext.Provider>
}

export const AppQuery = gql`
	query AppQuery {
		viewer {
			id
			firstName
			lastName
			userId
			username
		}

		generalSettings {
			title
			timezone
		}
	}
`
