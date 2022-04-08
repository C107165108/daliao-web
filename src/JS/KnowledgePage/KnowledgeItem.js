import { Link } from 'react-router-dom';
import '../../Style/KnowledgePage/KnowledgeItem.scss';
import React, { useState } from 'react';
import Backdrop from "@mui/material/Backdrop";

import Button from "@mui/material/Button";

export default function KnowledgeItem(props) {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const { knowledge } = props;
    console.log(knowledge)
    const { img, title,  mainContent, content } = knowledge
    return (


        <div className='knowledge-item'>

            <div className='knowledge-item' onClick={handleToggle}>
                <img src={img} />
                <h4>{title}</h4>
            </div>

            <Backdrop
                // sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <div className='knowledge-item-content' >

                    <img

                        src={img}
                    />

                    <div>
                        <h1>{title}</h1>
                        <p>{mainContent}</p>
                        <p>{content}</p>
                    </div>


                </div>
            </Backdrop>

        </div>

    );
}