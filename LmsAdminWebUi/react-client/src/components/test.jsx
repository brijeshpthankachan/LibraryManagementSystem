import DependencyContext, { useDependency } from "contexts/DependencyProvider"
import { useContext } from "react"

const Test = () => {

    const { mys } = useContext(DependencyContext)

    mys.callMe()
    return (
        <div>test</div>
    )
}

export default Test