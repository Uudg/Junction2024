import { Info } from 'lucide-react'
import nameLogo from './CoreMatch.png'

export const Sidebar = () => {
    return (
        <aside className="h-screen w-24 md:flex hidden flex-col items-center bg-transparent justify-between py-4 border-r border-solid border-black absolute top-0 left-0">
            <div className='flex flex-col gap-2 items-center'>
                <div className="w-14 h-14 rounded-lg bg-black"></div>
                <img src={nameLogo} alt="name logo here" />
            </div>
            <Info size={35} />
        </aside>
    )
}