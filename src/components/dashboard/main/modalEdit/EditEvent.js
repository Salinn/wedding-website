//React
import React from 'react';
//Components

const EditEvent = ({ row: { photo, date, time, title, content, location }, onChange }) => {

    return (
        <div className='text-left'>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Edit the {title} Event</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text"
                               name='title'
                               value={title}
                               onChange={onChange}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <textarea className="form-control"
                                  name='content'
                                  value={content}
                                  onChange={onChange}
                                  rows="3" />
                    </div>
                    <div className="form-group">
                        <label>Date:</label>
                        <input type="text"
                               name='date'
                               value={date}
                               onChange={onChange}
                               className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Time:</label>
                        <input type="text"
                               name='time'
                               value={time}
                               onChange={onChange}
                               className="form-control"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditEvent