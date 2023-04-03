import { FC, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Logo from '@/assets/Movie.svg';

import './Header.scss';

interface Event {
	display: string;
	path: string;
}

const HeaderNav = [
    {
        display: 'Home',
        path: '/'
    },
    {
        display: 'Movies',
        path: '/movie'
    },
    {
        display: 'TV Series',
        path: '/tv'
    }
]

const Header: FC = () => {
	const { pathname } = useLocation();
	const headerRef = useRef<HTMLDivElement | null>(null);

	const active = HeaderNav.findIndex(e => e.path === pathname);

	useEffect(() => {
		const shrinkHeader = () => {
			if (headerRef.current) {
				if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
					headerRef.current.classList.add('shrink');
				} else {
					headerRef.current.classList.remove('shrink')
				}
			} 
		}

		window.addEventListener('scroll', shrinkHeader);

		return () => {
			window.removeEventListener('scroll', shrinkHeader)
		}
	},[])

  return (
		<div ref={headerRef} className='header'>
			<div className='header__wrap container'>
				<div className='logo'>
					<img src={Logo} alt='logo'  />
					<Link to='/'> Movie </Link>
				</div>
				<ul className='header__nav'>
					{
						HeaderNav.map((e: Event, i: number) => (
							<li key={i} className={`${i === active ? 'active' : ''}`}>
									<Link to={e.path}>
										{e.display}
									</Link>
							</li>
						))
					}
				</ul>
			</div>
		</div>
  )
}

export default Header