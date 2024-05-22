import React, { useState } from 'react';

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSendClick = () => {
    const userData = {
      fullName: fullName,
      emailAddress: emailAddress,
      message: message
    };

    // Отправка данных на сервер
    fetch('http://localhost:5000/api/contacts', { // Убедитесь, что путь корректный
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(response => {
      if (response.ok) {
        console.log('Данные успешно отправлены!');
        // Очищаем поля ввода
        setFullName('');
        setEmailAddress('');
        setMessage('');
        setErrorMessage('');
      } else {
        response.json().then(errorData => {
          console.error('Произошла ошибка при отправке данных:', errorData);
          setErrorMessage('Ошибка: ' + (errorData.message || 'Не удалось отправить данные.'));
        });
      }
    })
    .catch(error => {
      console.error('Произошла ошибка:', error);
      setErrorMessage('Ошибка: ' + error.message);
    });
  };

  return (
    <div className="block__contactform">
      <h1 className="contact_h1">Contact form</h1>
      <div className="form__space in1">
        <input
          type="text"
          name="fullName"
          placeholder="Full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form__space in2">
        <input
          type="email"
          name="emailAddress"
          placeholder="Email address"
          value={emailAddress}
          onChange={(e) => setEmailAddress(e.target.value)}
        />
      </div>
      <div className="form__space in3">
        <input
          type="text"
          name="message"
          placeholder="Message me"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="button_ct" id="sendButton" onClick={handleSendClick}>
        <span>Send</span>
        <div className="ct_button_img">
          <img src="public/images/button get start.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
