import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="cardName">
            Nome da Carta:
            <input id="cardName" data-testid="name-input" type="text" />
          </label>

          <label htmlFor="cardDescription">
            Descrição da Carta:
            <textarea id="cardDescription" data-testid="description-input" />
          </label>

          <label htmlFor="atribu1">
            Attr01
            <input id="atribu1" type="number" data-testid="attr1-input" />
          </label>

          <label htmlFor="atribu2">
            Attr02
            <input id="atribu1" type="number" data-testid="attr2-input" />
          </label>

          <label htmlFor="atribu3">
            Attr03
            <input id="atribu1" type="number" data-testid="attr3-input" />
          </label>

          <label htmlFor="imagi">
            Imagem:
            <input id="imagi" data-testid="image-input" type="text" />
          </label>

          <label htmlFor="cadrType">
            Raridade:
            <select id="cardType" data-testid="rare-input">
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="tryunfo">
            Super Trybe Trunfo
            <input id="tryunfo" data-testid="trunfo-input" type="checkbox" />
          </label>
          <button type="button" data-testid="save-button">Salvar</button>
        </form>
      </div>
    );
  }
}

export default Form;
