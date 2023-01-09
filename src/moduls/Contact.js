import animal from "../img/animal.png";
import LinkIcon from "../img/linkedin (1).png";
import MailIcon from "../img/email.png";
import TelIcon from "../img/telegram.png";
import PhoneIcon from "../img/telephone.png";
import Facebook from "../img/facebook.png";



const Contact = () => {
    return(
        <div className="block-container" id="t4">
            <h2 className="nameTitle">Contact</h2>
            <div className="about-block contact-margin">
                <div className="bg">
                    <img src={animal} alt="animal" width="500px"/>
                </div>
                <div className="contact">
                    <p>If you have any questions, please feel free to drop me a line.
                        If you don't get an answer immediately,
                        I might just be travelling through the middle of nowhere. I'll back to you
                        as soon as I can. That's a promise!
                    </p>
                </div>
                <div className="about-block-form-link contact-margin">
                    <ul className="contact-wrapper">
                        <li className="contact-item">
                            <img src={LinkIcon} alt="icon"/>
                            <a className="contact-link" href="https://linkedin.com/in/elizavetaderkacheva">
                                Linkedin
                            </a>
                        </li>
                        <li className="contact-item">
                            <img src={Facebook} alt="icon"/>
                            <a className="contact-link" href="https://www.facebook.com/liza.derkachova">
                                Facebook
                            </a>
                        </li>
                        <li className="contact-item">
                            <img src={TelIcon} alt="icon"/>
                            <a className="contact-link" href="https://telegram.me/Elis_De">
                                Telegram
                            </a>
                        </li>
                    </ul>
                    <ul className="contact_phone">
                        <li className="contact-item">
                            <img src={MailIcon} alt="icon"/>
                            <a className="contact-link" href="mailto:elizaveta.derk@gmail.com">
                                elizaveta.derk@gmail.com
                            </a>
                        </li>
                        <li className="contact-item">
                            <img src={PhoneIcon} alt="icon"/>
                            <a className="contact-link" href="tel:+380932734230">
                                +380932734230
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    )
}

export default Contact;
