CREATE TABLE [dbo].[Table]
(
	[Id] INT NOT NULL PRIMARY KEY,
	[nome] VARCHAR(MAX) NOT NULL,
	[cpf] VARCHAR(50) ,
	[endereco] VARCHAR(MAX),
	[numeroCasa] VARCHAR(10),
	[cidade] VARCHAR(50),
	[estado] VARCHAR(50),
	[telefone] VARCHAR(20),
	[dataNascimento] VARCHAR(50),
	[senha] VARCHAR(50) NOT NULL,
	[email] VARCHAR(100) NOT NULL

)
