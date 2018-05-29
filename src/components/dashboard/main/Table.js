//React
import React from 'react';
//Components
import Modal from './Modal';
import EditForm from './EditForm'
import ReactCollapsingTable from 'react-collapsing-table';

const Table = ({tables, setNewEditRow, onChange, dashboard, ...props }) => {
    const callbacks = { edit: setNewEditRow };

    return (
        <div className='text-center'>
            <h2>{ tables[dashboard.displaying].title }</h2>
            <ReactCollapsingTable rows={ props[dashboard.displaying] }
                                  callbacks={ callbacks }
                                  { ...tables[dashboard.displaying] }/>
            <Modal>
                <EditForm row={dashboard.row}
                          displaying={dashboard.displaying}
                          onChange={onChange}/>
            </Modal>
        </div>
    );
};

export default Table