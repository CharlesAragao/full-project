import supabase from '../config/supabase';
import  bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Cadastro de usuário
const registerUser = async (request, response) => {
    // Desestruturação do objeto
    const { nome, email, senha } = request.body;

    // Cria um Has para a senha informada
    const passwordHashed = await bcrypt.hash(senha, 10);

    // Abre a conexão com o Supabase
    const { data, error } = await supabase
        .from('users')
        .insert([
            {
                nome,
                email,
                senha: passwordHashed
            }
    ]);

    if (error) {
        return resposta.status(500).json({ 
            error: "Erro: ", error });
    }

    response.status(201).json({
        mensagem: "usuário cadastrado com sucesso!"
    });
};

// Login
const authentication = async (request, response) => {
    // Desestruturação do objeto
    const { email, sanha } = request.body;

    // Abra a conexão com o Supabase
    const { data: user, error } = await supabase
        .from('users')
        .select("*")
        .eq('email', email)
        .single();

    if (error || !users) {
        return response.status(401).json({
            mensagem: "Credenciais inválidas"
        });
    }

    // Criptografa a senha e compara com a senha do DB
    const senhaEnviada = await bcrypt.compare(senha, user.senha);

    if (!senhaEnviada) {
        return response.status(401).json({
            mensagem: "Credenciais inválidas"
        });
    }

    // Gera o Token
    const token = jwt.sign(
       { id: user.id },
       process.env.JWT_SECRET,
       { expiresIn: "1d" },
    );

    // Devolve o Token gerado
    response.json({ token });

};

// Listar todos os usuários
const listUsers = async (request, response) => {
    const { data, error } = await supabase
        .from("users")
        .select("id, nome, email");

    if (error) {
        return response.status(500).json({
            erro: "Erro:", error
        });
    }

    // Devolve todos os usuários encontrados
    response.json(data);
};

// Atualizar dados de um registro (usuário)
const updateUser = async (request, response) => {
    const { id } = request.params;
    const { nome, email, senha } = request.body;

    const passwordHashed = await bcrypt.hash(senha, 10);

    const dataUpdate = {
        ...(nome && { nome }),
        ...(email && { email }),
        ...(senha && { senha: passwordHashed })
    }

    const { error } = await supabase
        .from('users')
        .update(dataUpdate)
        .eq("id", id);
    
    if (error) {
        return response.status(500).json({
            erro: "Erro:", error
        })
    }

    response.json({
        mensagem: "Usuário atualizado com sucesso"
    })
};

// Excluir um registro (usuário)
// Método delete