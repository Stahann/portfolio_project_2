import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import {
    HomeOutlined,
    MoneyCollectOutlined,
    BulbOutlined,
    FundOutlined,
    MenuOutlined,
} from '@ant-design/icons'
import icon from '../images/cryptocurrency.png'

const Navbar = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState<number | null>(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth) {
                setScreenSize(window.innerWidth)
            }
        }
        window.addEventListener('resize', handleResize)

        handleResize()

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (screenSize !== null && screenSize <= 800) {
            setIsActiveMenu(false)
        } else {
            setIsActiveMenu(true)
        }
    }, [screenSize])

    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size='large' />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Cryptoverse</Link>
                </Typography.Title>
                <Button
                    className='menu-control-container'
                    onClick={() => setIsActiveMenu(!isActiveMenu)}
                >
                    <MenuOutlined />
                </Button>
            </div>
            {isActiveMenu && (
                <Menu theme='dark'>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to='/'>Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to='/cryptocurrencies'>Cryptocurrencies</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to='/exchanges'>Exchanges</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to='/news'>News</Link>
                    </Menu.Item>
                </Menu>
            )}
        </div>
    )
}
export default Navbar
