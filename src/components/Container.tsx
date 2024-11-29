import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export function Container ({ children } : Props) {
    return(
        <div className="flex items-center mb-8 lg:mb-0 justify-between w-full max-w-[1246px] h-full px-[15px] mx-auto">
            {children}
        </div>
    )
}