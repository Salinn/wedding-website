//React
import React from 'react';
//Components
import Icon from '../../../assets/icons/Icon'

const SidebarLink = ({ iconName, iconSize, routeContent, name, changeDisplayedPage }) => {
    const onClick = () => changeDisplayedPage(name);

    return (
        <li className='nav-item'>
            <a className='nav-link align-middle' onClick={onClick}>
                            <span>
                                <Icon name={iconName} size={iconSize} color='white'/>
                            </span>
                <span className='pl-2 text-white'>{routeContent}</span>
            </a>
        </li>
    );
};

export default SidebarLink