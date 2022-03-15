import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";

function RegistrationForm() {

    const [username, setUsername] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const changeUsername = (event) => {
        setUsername(event.target.value)
    }

    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const changePassword = (event) => {
        setPassword(event.target.value)
    }

    const [password2, setPassword2] = useState('');
    const [passwordError2, setPasswordError2] = useState('');
    const changePassword2 = (event) => {
        setPassword2(event.target.value)
    }

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const changeName = (event) => {
        setName(event.target.value)
    }

    const [country, setCountry] = useState('');
    const [countryError, setCountryError] = useState('');
    const changeCountry = (event) => {
        setCountry(event.target.value)
    }

    const [terms, setTerms] = useState(false);
    const [termsError, setTermsError] = useState('');
    const changeTerms = (event) => {
        setTerms(event.target.value?true:false)
    }

    const handleSubmit = (event) => {

        let isError = false;

        if (username == '') {
            setUsernameError('Please insert username');
            isError = true;
        } else {
            setUsernameError('');
        }

        if (password == '') {
            setPasswordError('Please insert password');
            isError = true;
        } else if (password.length < 8) {
            setPasswordError('Password must have at least 8 characters');
            isError = true;
        } else {
            setPasswordError('');
        }

        if (password2 == '') {
            setPasswordError2('Please retype password');
            isError = true;
        } else if (password != password2) {
            setPasswordError2('Passwords must match');
            isError = true;
        } else {
            setPasswordError2('');
        }

        if (name == '') {
            setNameError(true);
            isError = true;
        } else {
            setNameError('');
        }

        if (country == '') {
            setCountryError(true);
            isError = true;
        } else {
            setCountryError('');
        }

        if (!terms) {
            setTermsError(true);
            isError = true;
        } else {
            setTermsError('');
        }

        if (isError) {
            event.preventDefault();
            event.stopPropagation();                
        }
    };

    return (
        <div>
            <div>
                <div className="container container-height">
                    <Form className="col-4 registration-form" noValidate onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicUsername">
                            <Form.Control type="text" placeholder="Username*" required value={username} onChange={changeUsername} />
                            <Form.Control.Feedback type="invalid" style={{display: usernameError?"block":"none"}}>
                                Please insert username
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password*" required value={password} onChange={changePassword} />
                            <Form.Control.Feedback type="invalid" style={{display: passwordError?"block":"none"}}>
                                {passwordError}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicRetypePassword">
                            <Form.Control type="password" placeholder="Retype password*" required value={password2} onChange={changePassword2} />
                            <Form.Control.Feedback type="invalid" style={{display: passwordError2?"block":"none"}}>
                                {passwordError2}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicFirstName">
                            <Form.Control type="text" placeholder="First name*" required value={name} onChange={changeName}/>
                            <Form.Control.Feedback type="invalid" style={{display: nameError?"block":"none"}}>
                                Please insert your name
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicLastName">
                            <Form.Control type="text" placeholder="Last name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCountry">
                            <Form.Select required value={country} onChange={changeCountry}>
                                <option disabled value="">Country*</option>
                                <option value="1">Latvia</option>
                                <option value="2">Lithuania</option>
                                <option value="3">Estonia</option>
                            </Form.Select>
                            <Form.Control.Feedback type="invalid" style={{display: countryError?"block":"none"}}>
                                Please choose your country
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check
                                required checked={terms} onChange={changeTerms}
                                label="Agree to terms and conditions*"
                            />
                            <Form.Control.Feedback type="invalid" style={{display: termsError?"block":"none"}}>
                            You must agree before submitting
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button className="btn btn-dark" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div >
    )
}

export default RegistrationForm;