import React from 'react'
import "./sidebar.css";

import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import DoneIcon from '@material-ui/icons/Done';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar__icons">
                <InboxIcon />
                <AddIcon />
                <DoneIcon />
                <DeleteForeverIcon />
            </div>
        </div>
    )
}

export default Sidebar
