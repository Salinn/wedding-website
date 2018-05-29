//React
import React from 'react';
//Components

const EditWeddingParty = ({ row: { name, bio, image }, onChange }) => {

    return (
        <div className='text-left'>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit {name}'s Info</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text"
                               name='name'
                               value={name}
                               onChange={onChange}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Bio:</label>
                        <textarea className="form-control"
                                  name='bio'
                                  value={bio}
                                  onChange={onChange}
                                  rows="3" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditWeddingParty