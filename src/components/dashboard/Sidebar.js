//React
import React from 'react';
//Components
import SidebarLink from './sidebar/SidebarLink';

const Sidebar = ({ changeDisplayedPage }) => {
    const sidebarNavigation = [
        { iconName: 'Home', iconSize: 16, routeContent: 'Home', name: '' },
        { iconName: 'Activities', iconSize: 16, routeContent: 'Activities', name: '' },
        { iconName: 'Events', iconSize: 16, routeContent: 'Events', name: 'events' },
        { iconName: 'Hotels', iconSize: 16, routeContent: 'Hotels', name: '' },
        { iconName: 'WeddingParty', iconSize: 16, routeContent: 'Wedding Party', name: 'weddingParty' },
    ];
    const sidebarLinks = sidebarNavigation.map((link, index) => {
        return <SidebarLink key={index}
                            changeDisplayedPage={ changeDisplayedPage }
                            {...link} />
    });

    return (
        <div className='col-12 col-md-2 bg-dark sidebar'>
            <div className='sidebar-sticky'>
                <ul className='nav flex-column'>
                    { sidebarLinks }
                </ul>
            </div>
        </div>
    );
};

export default Sidebar