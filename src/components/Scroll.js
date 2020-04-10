import React from 'react';

const Scroll = ( props ) => {
    return (
        <div style={{ overflow : 'hidden', height : '80vh' }}>
        	{ props.children }
        </div>
    );
};

export default Scroll;
