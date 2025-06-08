import './AppHeader.css';

import { Navigation, Divider } from './Elements.tsx'

function AppHeader() {
    const items = [
        ['Home', '/'],
        ['Education', '/education'],
        ['Skills', '/skills'],
        ['Other Skills', '/other'],
        ['Projects', '/projects'],
        ['Contact', '/contact']
    ]

    return (
        <header>
            <div>
                <div className='logo'>
                    <a href='/'><img src='/assets/images/logo.png' alt='Logo' /></a>
                </div>
                <Navigation items={items} />
            </div>
            <Divider />
        </header>
    );
}
export default AppHeader;