const { createContext } = require("react")

const DependencyContext = createContext()

export function DependencyProvider({mys,children}){
    return(
        <DependencyContext.Provider value={{mys}}>
            {children}
        </DependencyContext.Provider>
    )
}

export default DependencyContext