import { ReactNode } from "react";
import { useAppContext } from "../../utilities/AppContext";

export default function AuthLayout({ children }: {children: ReactNode}) {
	const { state } = useAppContext()

	return <>{children}</>
}

