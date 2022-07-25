import React from 'react'
import EmpresaItem from './EmpresaItem'

const empresas = [
  {
    id: 1,
    nome: "FX2 Tecologia - 05/2014 a 01/2022",
    cargo: "Programador",
    atividades: "Desenvolvimento e manutenção de sistemas de controle de acesso com foco em catracas e controladores de porta; Manutenção e melhorias aos sistemas legados(ACESSO, XPnetw e outros) da empresa, desenvolvido através da linguagem Pascal(Dlphi) com Banco de Dados Firebird; Desenvolvimento de aplicação, de Ordem de Serviço, com tecnologia Datasnap; Projetos de APIs para controle de acesso com Nodejs, Horse, React, JS."
  },

  {
    id: 2,
    nome: "Laboratório Magistral - 08/2006 a 03/2012",
    cargo: "Auxiliar Administrativo",
    atividades: "Aprimoramento e suporte a TI da empresa; Implantação e manutenção do ERP (Formula Certa for Windows) com treinamento dos usuários; Elaboração de relatórios suplementares; Solicitação, através dos órgãos responsáveis (ANVISA, APEVISA, etc), de renovações de autorizações; Acompanhamento das entregas de matérias-primas junto as transportadoras; dentre outros."
  },

  {
    id: 3,
    nome: "Elcoma Comp. e Mat. Eletrônicos - 01/2001 a 01/2006",
    cargo: "Supervisor de Almoxarifado",
    atividades: "Recebimento e expedição de cargas com lançamentos e emissão das respectivas NFs; Acompanhamento de custo de fretes e controle de entrega através de planilhas e gráficos; Controle de estoque com inventários periódicos e identificação, com correções, de eventuais divergências."
  },

  {
    id: 4,
    nome: "Philips Eletrônica do Nordeste - 12/1998 a 12/2000",
    cargo: "Auxiliar de Recebimento",
    atividades: "Recebimento e expedição de cargas com lançamentos e emissão das respectivas NFs; Armazenagem e controle FIFO de produtos; Inventários periódicos; etc."
  },

  {
    id: 5,
    nome: "LF Produtividade e Desenv. de RH - 08/1998 a 11/1998",
    cargo: "Almoxarife",
    atividades: "Terceirizado na Philips com as mesmas atribuições."
  },

  {
    id: 6,
    nome: "Farmácias Guararapes - 04/1995 a 07/1997",
    cargo: "Conferente",
    atividades: "Separação e conferência, em sistema de rodízio, de minutas de pedidos das filiais; Manutenção do setor através de abastecimento do estoque, controle de validades; etc."
  },

  {
    id: 7,
    nome: "JL Andrade Lima (Fcia. Ramos) - 01/1992 a 02/1994",
    cargo: "Auxiliar Serviços Gerais",
    atividades: "Controle de estoque; Atendimento aos clientes(balconista); etc."
  },

  {
    id: 8,
    nome: "JL Andrade Lima (Fcia. Ramos) - 01/1990 a 01/1991",
    cargo: "Auxiliar Serviços Gerais",
    atividades: "Manutenção e limpeza do local; Pagamentos bancários; Abastecimento e remarcação de preço dos produtos; etc."
  }
]

const Empresa = () => {
    return (
      <div>
        <h3 className='mx-6 md:mx-0 text-4xl font-bold text-center uppercase mt-10 text-roxo'>Meus Historicos Profissionais</h3>
        <div className='md:grid md:grid-cols-3 md:gap-2 md:my-6'>
          {empresas.map((empresa, i) => (
              <EmpresaItem key={'i' + i} empresa={empresa} />
            ))}
        </div>
      </div>
    )
  }
  export default Empresa