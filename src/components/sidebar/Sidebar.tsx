import { Info } from 'lucide-react'
import nameLogo from '../../assets/CoreMatch_vertical.png'

export const Sidebar = () => {
    return (
        <aside className="hidden h-screen w-full md:flex flex-col items-center bg-transparent justify-between py-4 border-r border-solid border-black absolute top-0 left-0">
            <div className='flex flex-col gap-2 items-center'>
                <div className="w-14 h-14 rounded-lg bg-black"></div>
                <img src={nameLogo} alt="name logo here" />
            </div>
            <Info size={35} />
        </aside>
    )
}