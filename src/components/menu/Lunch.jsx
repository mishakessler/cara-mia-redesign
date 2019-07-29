import React from 'react'

class Lunch extends React.Component{
    render(){
        return(
            <div className="submenu">
                <h3>LUNCH</h3>
                <h4>SALADS</h4>

                <h5>Caesar</h5>
                <p>romaine lettuce tossed in our traditional caesar dressing with garlic croutons</p>
                <h6>$16</h6>

                <h5>Pazzo!</h5>
                <p>grilled vegetables, marinated & sautéed in our balsamic vinaigrette dressing, served over mesclun lettuce with fresh mozzarella & provolone cheese</p>
                <h6>$16</h6>

                <h5>Caprese</h5>
                <p>fresh mozzarella, tomato, roasted red peppers & olives</p>
                <h6>$16</h6>

                <h5>Russo</h5>
                <p>romaine lettuce, tomatoes, cucumbers, celery, salami, fresh mozzarella, roasted peppers & provolone</p>
                <h6>$12/$19</h6>

                <h5>Mixed</h5>
                <p>romaine lettuce, cucumbers, tomatoes, celery, olives, roasted peppers</p>
                <h6>$9/$15</h6>

                <h5>Side</h5>
                <p>romaine lettuce, tomatoes and cucumbers in house balsamic vinaigrette</p>
                <h6>$4</h6>
            </div>
        )
    }
}

export default Lunch;