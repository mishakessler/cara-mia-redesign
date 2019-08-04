import React from 'react';

export default function PrivateParty() {
  return (
    <div className='submenu'>

      <h4>Party Menu 1</h4>
      <h6>35$ per person</h6>

      <div className="subsection">
        <h5>First Course - Salad</h5>
        <p>Family Style Salad</p>
        <p>(Mixed or Caesar)</p>

        <h5>Second Course - Pasta</h5>
        <p>Family Style Penne</p>
        <p>(Choice of Voka or Marinara)</p>
        <br></br>

        <h5>Main Course - Choice</h5>
        <p>Chicken Francaise</p>
        <p>Flounder Oreganata</p>
        <p>Veal Parmigiana</p>
        <p>Eggplant Rollatini</p>
      </div>

      <div className="subsection">
        <h5>Included Drinks:</h5>
        <p>Unlimited Soda, Coffee and Tea</p>
        <h5>Included Desserts:</h5>
        <p>Homemade Cannoli, Tartufo, or Cheesecake</p>
      </div>

      <hr></hr>

      <h4>Party Menu 2</h4>
      <h6>45$ per person</h6>

      <div className="subsection">
        <h5>First Course - Salad</h5>
        <p>Family Style Hot Appetizers</p>
        <p>Fried Calamari, Clams, Mozzerella Sticks and Stuffed Mushrooms</p>

        <h5>Second Course - Pasta</h5>
        <p> Family Style Penne alla Vodka and Penne Marinara</p>

        <h5>Main Course – Choice:</h5>
        <p>Veal Parmigana</p>
        <p>Chicken Francaise</p>
        <p>Salmon Oreganata</p>
        <p>Chicken Parmigiana</p>
        <p>Eggplant Rollatini</p>
      </div>

      <div className="subsection">
        <h5>Included Drinks:</h5>
        <p>Unlimited Soda, Coffee, Tea, Cappuccino and Espresso</p>
        <h5>Included Desserts:</h5>
        <p>Homemade Cannoli, Tartufo, or Cheesecake</p>
      </div>
      <br></br>
      <em>
        <p>Tax & 20% gratuity will be added for all private parties.</p>
        <p>Please inquire about custom menus and liquor packages.</p>
      </em>

    </div>
  )
}