import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div>
        <form className="formu">
          <label htmlFor="cardName">
            Nome da Carta:
            <input
              name="cardName"
              onChange={ onInputChange }
              value={ cardName }
              // id="cardName"
              data-testid="name-input"
              type="text"
            />
          </label>

          <label htmlFor="cardDescriptions">
            Descrição da Carta:
            <textarea
              name="cardDescription"
              onChange={ onInputChange }
              value={ cardDescription }
              // id="cardDescriptions"
              data-testid="description-input"
            />
          </label>

          <label htmlFor="atribu1">
            Attr01
            <input
              onChange={ onInputChange }
              value={ cardAttr1 }
              name="cardAttr1"
              // id="atribu1"
              type="number"
              data-testid="attr1-input"
            />
          </label>

          <label htmlFor="atribu2">
            Attr02
            <input
              onChange={ onInputChange }
              name="cardAttr2"
              value={ cardAttr2 }
              // id="atribu2"
              type="number"
              data-testid="attr2-input"
            />
          </label>

          <label htmlFor="atribu3">
            Attr03
            <input
              onChange={ onInputChange }
              name="cardAttr3"
              value={ cardAttr3 }
              // id="atribu3"
              type="number"
              data-testid="attr3-input"
            />
          </label>

          <label htmlFor="imagi">
            Imagem:
            <input
              onChange={ onInputChange }
              name="cardImage"
              value={ cardImage }
              // id="imagi"
              data-testid="image-input"
              type="text"
            />
          </label>

          <label htmlFor="cadrType">
            Raridade:
            <select
              onChange={ onInputChange }
              value={ cardRare }
              name="cardRare"
              // id="cardType"
              data-testid="rare-input"
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>
          </label>

          <label htmlFor="tryunfo">
            Super Trybe Trunfo
            <input
              onChange={ onInputChange }
              name="cardTrunfo"
              checked={ cardTrunfo }
              // id="tryunfo"
              data-testid="trunfo-input"
              type="checkbox"
            />
          </label>
          <button
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            type="button"
            data-testid="save-button"
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
};

export default Form;
