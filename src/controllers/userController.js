import supabase from '../config/supabase';
import  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const registerUser = async (request, response) => {
    // Desestruturação do objeto
    const { nome, email, senha } = request.body;

    // Cria um Has para a senha informada
    const passwordHashed = await bcrypt.hash(senha, 10);

    // Abre a conexão com o Supabase
    const { data, error } = await supabase
    .from('user')
    .insert([
        {
            nome,
            email,
            senha: passwordHashed
        }
    ]);

    if (erro) {
        return resposta.status(500).json({ error });
    }

};

