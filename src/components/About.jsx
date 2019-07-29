import React from 'react'
import about1 from '../assets/about1'
import about2 from '../assets/about2'


class About extends React.Component{
    render(){
        return(
            <div className="about">
                <img src={about1} alt="family picture" />
                
                <img src={about2} alt="making pizza dough" />

                <p>
                It all began many years ago in a small region in Italy called Broccostella, where Tomaso and Armanda DeCiantis dreamed of moving to the United States to start their own business. After arriving at Ellis Island and much hard work, they opened Cara Mia Restaurant in Queens Village, New York. Both their children (Larry, Carlo and Anna) and Armanda’s mother, Liberata helped out every day in the restaurant. Cara Mia soon became famous for Liberata’s meatball recipe. All three children can still be found here preparing our fresh Italian specialties.
                </p>
            </div>
        )
    }
}

export default About;