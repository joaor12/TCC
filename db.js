const mongoose = require('mongoose');
const uri = "mongodb+srv://joaorodrigo105:eu9PEf6prTIAntDX@cluster0.sx5ei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const DATABASE_NAME = "Animais"

const connectDB = async () => {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDB conectado com sucesso');
    } catch (error) {
      console.error('Erro ao conectar ao MongoDB:', error);
      process.exit(1); // Encerra o processo em caso de falha
    }
};

module.exports = connectDB