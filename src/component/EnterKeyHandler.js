import React from 'react'

const EnterKeyHandler = ({ children, onEnterKeyDown}) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            onEnterKeyDown(e);
        }
    };

    return <div onKeyDown={handleKeyDown}>{children}</div>;
};


export default EnterKeyHandler