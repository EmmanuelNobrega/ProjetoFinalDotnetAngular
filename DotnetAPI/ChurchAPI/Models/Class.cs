using System;
using Microsoft.EntityFrameworkCore.InMemory;
namespace ChurchAPI.Models
{
    public class Member
    {

        
        public long Id { get; set; }
        public string Nome { get; set; }
        public string CPF { get; set; }
        public string? Endereco { get; set; }
        public string? NumeroCasa { get; set; }
        public string? Cidade { get; set; }
        public string? Estado { get; set; }
        public string? Telefone { get; set; }
        public string DataNascimento { get; set; }
        public string Senha { get; set; }
        public string? Email { get; set; }

        
        public void SetPassword(string senha)
        {
            this.Senha = senha;
        }
        public string GetPassword()
        {
            return this.Senha;
        }
        public void SetId(long id)
        {
            this.Id = id;
        }
        public long GetId()
        {
            return this.Id;
        }
        public void SetNome(string nome){
            this.Nome = nome;
        }
        public string GetNome( )
        {
            return this.Nome;
        }
        
        public void SetCPF(string cpf)
        {
            this.CPF = cpf;
        }
        public string GetCPF()
        {
            return this.CPF;
        }
        public void SetEndereco(string endereco)
        {
            this.Endereco = endereco;
        }
        public string GetEndereco()
        {
            return this.Endereco;
        }
        public void SetTelefone(string telefone)
        {
            this.Telefone = telefone;
        }
        public string GetTelefone()
        {
            return this.Telefone;
        }
        public void SetDataNascimento(string dataNascimento)
        {
            this.DataNascimento = dataNascimento;
        }
        public string GetDataNascimento()
        {
            return this.DataNascimento;
        }
        public void SetEmail(string email)
        {
            this.Email = email;
        }
        public string GetEmail()
        {
            return this.Email;
        }

    }
    
}

