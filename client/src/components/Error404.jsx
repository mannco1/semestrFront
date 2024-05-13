import React from 'react';

const Error404 = () => {
  return (
    <div className="error-page" style={{textAlign: 'center', padding: '50px'}}>
      <h1 style={{color: '#18b5a4', fontSize: '48px', marginBottom: '20px'}}>Ошибка 404</h1>
      <p style={{color: '#000', fontSize: '24px'}}>Страница не найдена</p>
      <p style={{color: '#000', fontSize: '16px', marginTop: '20px'}}>Вернитесь на <a href="/" style={{color: '#18b5a4'}}>главную страницу</a></p>
    </div>
  );
};

export default Error404;
