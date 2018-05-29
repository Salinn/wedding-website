//React
import React from 'react';
//Components
import Icon from '../../../assets/icons/Icon';

const EditRow = ({ row, CustomFunction }) => {
    const onClick = () => CustomFunction(row);

    return (
        <div className=''>
            <button type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    onClick={ onClick }>
                <Icon name='Edit' />
            </button>
        </div>
    );
};

export default EditRow