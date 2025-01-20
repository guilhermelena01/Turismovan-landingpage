import { createContext, useState } from "react";

interface AppContextProps {
    selectedRoute: string;
    handleSelectedRoute: () => void | null;
}

const AppContext = createContext<AppContextProps>({
    selectedRoute: "home",
    handleSelectedRoute: null
})

export function AppProvider(props: any) {
    const [selectedRoute, setSelectedRoute] = useState("")

    function handleSelectedRoute() {
        setSelectedRoute(() => "Nova rota")
    }

    return (
        <AppContext.Provider value={{
            selectedRoute,
            handleSelectedRoute
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext;