import React from 'react';
import "./DropDownSelect.scss"

class DropDownSelect extends React.Component {

  renderSelectOptions = (item) => (
    <option key={item} value={item} className="post-a-job__form-category-option">{item}</option>
  )

  render() {
    const { input, label } = this.props;
    return (
      <div>
        <select {...input} className="post-a-job__form-category-option">
          <option value="" >Выберите категорию</option>
          {this.props.options.map(this.renderSelectOptions)}
        </select>
      </div>
    );
  }
}

export default DropDownSelect;