const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/contactFormDB';

// Подключаемся к MongoDB
mongoose.connect(MONGODB_URI, {
  
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

// Создаем схему для модели данных
const contactSchema = new mongoose.Schema({
  fullName: String,
  emailAddress: String, 
  message: String
});

// Создаем модель на основе схемы
const Contact = mongoose.model('Contact', contactSchema);

// Используем body-parser для обработки JSON-данных
app.use(bodyParser.json());

// Включаем CORS для разрешения запросов с другого домена
app.use(cors());

// Обрабатываем POST-запрос для сохранения данных
app.post('/api/contacts', (req, res) => {
  const { fullName, emailAddress, message } = req.body;
  console.log('Received data:', req.body); // Логируем полученные данные

  // Создаем новый объект Contact
  const newContact = new Contact({
    fullName: fullName,
    emailAddress: emailAddress,
    message: message
  });

  // Сохраняем объект в базе данных
  newContact.save()
    .then(() => {
      console.log('Contact saved successfully');
      res.status(201).json({ message: 'Contact saved successfully' });
    })
    .catch(err => {
      console.error('Error saving contact:', err);
      res.status(500).json({ error: err.message });
    });
});

// Запускаем сервер
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
