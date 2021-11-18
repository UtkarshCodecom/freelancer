import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { RiHomeSmile2Line, RiHomeSmile2Fill, RiUser5Fill, RiSearchEyeFill } from 'react-icons/ri'
import {RiDashboardFill} from 'react-icons/ri'
import { BiSearchAlt, BiCategory, BiCategoryAlt } from 'react-icons/bi';
import { BsPeople, BsFillPeopleFill } from 'react-icons/bs'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdPeopleOutline, MdPeople } from 'react-icons/md';
import {TiHomeOutline, TiHome} from 'react-icons/ti'

import { RiUser5Line, RiDashboardLine } from 'react-icons/ri'
import './style.css';

const Downbar = (props) => {
    const history = useHistory()
    const [activeTabs, setActiveTabs] = useState(props.name)
    useEffect(() => {
        switch (activeTabs) {
            case 'home':
                history.push('/')
                break;
            case 'search':
                history.push('/all')
                break;
            case 'favourites':
                history.push('/favourites')
                break;
            case 'account':
                history.push('/checkout')
                break;
            default:
                history.push('/')
                break;
        }
    }, [activeTabs, history])

    return (
        <div className='bottom-nav'>
            <div className='bn-tab'>
                {activeTabs === 'home' ?
                    <TiHome
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    /> :
                    <TiHomeOutline
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('home')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'search' ?
                    <RiDashboardFill
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('search')}
                    /> :
                    <RiDashboardLine
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('search')}
                    />}
            </div>
            <div className='bn-tab'>
                {activeTabs === 'account' ?
                    <MdPeople
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    /> :
                    <MdPeopleOutline
                        size='35'
                        color='#000'
                        onClick={() => setActiveTabs('account')}
                    />}
            </div>
        </div>
    )
}

export default Downbar;