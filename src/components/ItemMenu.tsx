
type Props = {
    name: string
}

export function ItemMenu({ name }: Props){
    return(
        <button className="flex items-center gap-3">
            <span className="text-primary-gray font-bold hover:text-primary-blue">{name}</span>
        </button>
    )
}