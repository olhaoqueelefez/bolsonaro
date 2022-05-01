import * as React from 'react'

const Header = () => {
  return (
    <header>
    <div className="bg-dark collapse" id="navbarHeader">
        <div className="container">
        <div className="row">
            <div className="col-sm-8 col-md-7 py-4">
            <h4 className="text-white">Sobre</h4>
            <p className="text-muted">Essa página foi feita com o objetivo de manter uma coletânea de todos os males causados por Bolsonaro durante seu mandato presidencial. Cada fato contém uma breve explicação sobre o contexto em que aconteceu e fontes jornalísticas para comprovação.</p>
            <p className="text-muted">Esperamos que as informações contidas aqui sejam úteis para o combate às fake news que vêm cusando grandes danos ao país.</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4">
            <h4 className="text-white">Contato</h4>
            <ul className="list-unstyled">
                <li><a href="olhaoqueelefez@protonmail.com" className="text-white">Email</a></li>
            </ul>
            </div>
        </div>
        </div>
    </div>
    <div className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
        <a href="/" className="navbar-brand d-flex align-items-center">
            <strong>O que Bolsonaro fez</strong>
        </a>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        </div>
    </div>
    </header>
  )
}

export default Header;