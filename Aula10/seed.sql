-- database: banco.db
CREATE TABLE usuarios (
    id,
    nome,
    email
);

INSERT INTO usuarios (id, nome, email )
VALUES (1, 'Loonie', 'seila@gmail.com.br');

SELECT * FROM usuarios;