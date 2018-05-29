//React
import React from 'react';
//Components
import EditWeddingParty from './modalEdit/EditWeddingParty';
import EditEvent from './modalEdit/EditEvent';

const EditForm = (props) => {
    switch (props.displaying) {
        case 'weddingParty':
            return <EditWeddingParty { ...props }/>;
        case 'events':
            return <EditEvent { ...props }/>;
        default:
            return <span />;
    }
};

export default EditForm