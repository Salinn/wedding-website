//React
import React from 'react';
//Icon Libraries
import { FaHome, FaGroup } from 'react-icons/lib/fa';
import { MdEvent, MdDirectionsBike, MdHotel, MdCreate } from 'react-icons/lib/md';

const Icon = ({name, ...props}) => {
    switch (name) {
        case 'Activities':
            return <MdDirectionsBike {...props} />;
        case 'Home':
            return <FaHome {...props} />;
        case 'Hotels':
            return <MdHotel {...props} />;
        case 'Events':
            return <MdEvent {...props} />;
        case 'WeddingParty':
            return <FaGroup {...props} />;
        case 'Edit':
            return <MdCreate {...props} />;
        default:
            return <span />;
    }
};

export default Icon