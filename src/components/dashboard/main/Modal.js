//React
import React from 'react';
//Components

const Modal = ({ children }) => {

    return (
        <div className="modal fade"
             id="exampleModal"
             tabIndex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    { children }
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal