import IconSearch from '@/assets/icon-search.svg'
import Image from 'next/image'

export function Search() {
    return(
        <div className='flex items-center gap-4'>
            <Image src={IconSearch} alt='Icon Search'/>
            <input type="Text" className='bg-transparent outline-none text-white pr-5 placeholder:text-white' placeholder='Buscar'/>
        </div>
    )
}