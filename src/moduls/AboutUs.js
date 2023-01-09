import dogs from "../img/dogs.jpg";
const AboutUs = () => {
     return(
         <div className="block-container" id="t1">
             <h2 className="nameTitle">About Us</h2>
             <div className="about-block">
                 <div className="about-block-item">
                     <p>
                         During the war, not only people suffer, but also animals.
                         Ukrainians were sometimes forced to leave their pets at home,
                         many pets were lost and there are those that tragically lost their owner.<br></br>
                         They are hungry and looking for a new home!
                     </p>
                     <p>
                         Throughout this war, our Stray Animal Care team has managed so far to help more than 1800 homeless dogs and cats in Kharkov.
                         We have treated injured animals, supported shelters with additional resources, and helped families feed and care for their beloved pets.
                         Our the team reached areas where our help was needed most.

                         With so many homes devastated and loved ones lost, our work to help pets and their owners,
                         stray animals and shelter animals brought some comfort and hope to these areas.
                     </p>
                 </div>
                 <div className="about-block-item">
                     <img src={dogs} alt="dogs"/>
                 </div>
             </div>
             <div className="about-block-form-link">
                 <p>
                     We want to help your pet! And give them what they need: warm, home and food. Also give them emergency help and our love!
                     Please, fill in the <a href="#t3" className="link-form">form</a> if you need our help with food or save your animals!
                 </p>
             </div>
         </div>
     )
}

export default AboutUs;
