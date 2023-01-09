import {useRef, useState} from "react";
import {send} from "emailjs-com";
import FormInput from "./FormInput";

const MyForm = () => {

    const [toSend, setToSend] = useState({
        user_firstName: '',
        user_lastName: '',
        user_address: '',
        animal_description: '',
        animal: '',
        animal_quantity: '',
        user_phone: '',
    });

    const inputs = [
        {
            id: 1,
            name: 'user_firstName',
            type: 'text',
            placeholder: 'Ivan',
            value: toSend.user_firstName.trim().replace(/\s/g, ''),
            label: 'First name of the owner',
            errorMessage: "Please, enter your First Name!",
            required: true,
            pattern: "[A-Za-z]{3,20}"
        },
        {
            id: 2,
            name: 'user_lastName',
            type: 'text',
            placeholder: 'Ivanov',
            value: toSend.user_lastName.trim(),
            label: 'Last name of the owner',
            errorMessage: "Please, enter your Last Name!",
            required: true,
            pattern: "[A-Za-z]{2,32}"
        },
        {
            id: 3,
            name: 'user_address',
            type: 'text',
            placeholder: 'Kharkiv, st.Svobody, h.1, flat 1',
            value: toSend.user_address,
            label: 'City/Village, Address',
            errorMessage: "Please, write your address! It should be valid address",
            required: true,
            pattern: "[A-Za-z0-9]{3,30}"
        },
        {
            id: 4,
            name: 'user_phone',
            type: 'text',
            placeholder: '380',
            value: toSend.user_phone.trim(),
            label: 'Phone number',
            errorMessage: "Please, write your phone number min: 10 symbols, max:13 symbols!It should be valid number",
            required: true,
            pattern: "[0-9]{10,13}"
        },
        {
            id: 5,
            name: 'animal',
            type: 'text',
            placeholder: 'Dog or Cat',
            value: toSend.animal.trim(),
            label: 'Animal',
            errorMessage: "Please, write dog/cat!",
            required: true,
            pattern: "[A-Za-z]{2,20}"
        },
        {
            id: 6,
            name: 'animal_quantity',
            type: 'number',
            placeholder: "2",
            value: toSend.animal_quantity,
            label: 'Quantity',
            errorMessage: "Please, write quantity!",
            required: true,
            min: 1,
            max: 10,
        }

    ]

    const onSubmit = (e) => {
        e.preventDefault();

        send('service_end315z', 'template_mypxws2', toSend, 'xGYUVcpdRzeTgqgXT')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert(`${toSend.user_firstName} ${toSend.user_lastName} your form was send!`)
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });

        setToSend({
            user_firstName: '',
            user_lastName: '',
            user_address: '',
            animal_description: '',
            animal: '',
            animal_quantity: '',
            user_phone: '',
        })

    };

    const formRef = useRef();

    const onChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return(
        <div className="block-container animal" id="t3">
            <h2 className="nameTitle">Form</h2>
            <div className='animalForm' >
                <p>We will help your pet!</p>
                <p>Please fill out the form. We need your correct data. As soon as we receive it, we will call you back!</p>

                <form ref={formRef} onSubmit={onSubmit}>
                    {inputs.map((input) => (
                            <FormInput key={input.id}
                                       {...input}
                                       value={toSend[input.name]}
                                       onChange={onChange} />
                        ))}

                    <div className="form-item">
                        <label htmlFor="animal_description">Description of problem</label><br/>
                        <textarea
                            rows="5"
                            name='animal_description'
                            value={toSend.animal_description}
                            onChange={onChange}
                            placeholder="Please, write everything we can do for your animal(food/save/emergency help/evacuation to the save place)!"
                        />

                    </div>
                    <input className="btn" type='submit' value="Submit"/>
                </form>
            </div>
        </div>
    )
}

export default MyForm;
