import { TbApps } from 'react-icons/tb'
import { MdLiveTv, MdOutlineMovieFilter, MdOutlineSettingsSuggest, MdGraphicEq } from 'react-icons/md'
import { RiMovie2Line } from 'react-icons/ri'
import { GiDramaMasks } from 'react-icons/gi'
import { SlScreenDesktop } from 'react-icons/sl'


const cardData = [
    {
        name: 'Live TV',
        icon: <MdLiveTv className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'Movies',
        icon: <RiMovie2Line className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'Drama',
        icon: <GiDramaMasks className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'Shows',
        icon: <MdOutlineMovieFilter className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'Catch Up',
        icon: <SlScreenDesktop className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'EPS',
        icon: <MdGraphicEq className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'Apps',
        icon: <TbApps className='text-white h-[50px] w-[50px] mx-auto' />
    },
    {
        name: 'Settings',
        icon: <MdOutlineSettingsSuggest className='text-white h-[50px] w-[50px] mx-auto' />
    }
]

export default cardData;