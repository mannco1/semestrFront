const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Подключаемся к MongoDB
mongoose.connect('mongodb://localhost:27017/contactFormDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

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

// Обрабатываем POST-запрос для сохранения данных
app.post('/api/contacts', (req, res) => {
  const { fullName, emailAddress, message } = req.body;

  // Создаем новый объект Contact
  const newContact = new Contact({
    fullName: fullName,
    emailAddress: emailAddress,
    message: message
  });

  // Сохраняем объект в базе данных
  newContact.save()
    .then(() => res.status(201).json({ message: 'Contact saved successfully' }))
    .catch(err => res.status(500).json({ error: err.message }));
});

// Запускаем сервер
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
