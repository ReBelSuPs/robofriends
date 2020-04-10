import React from 'react'
import Card from './Card.js'

const Cardlist = ({ robots }) => {
    const cardsArray = robots.map((user, i) => {
        return (
            <Card 
				id={ user.id } 
				name={ user.name } 
				email={user.email}
				/>
        )
    });
    return (
        <div style={{ height:'100%', marginRight: '-50px', paddingRight: '50px', overflowY : 'scroll' }}>
		{ cardsArray }
		</div>
    )
}

export default Cardlist;