const React = require('react');
const ReactDOM = require('react-dom');
require('../style.css');
class SelectTab extends React.Component {
    state = {selected: this.props.selected}
    handleClick(e) {
        this.setState({'selected': e.target.getAttribute('data-value')})
    }
    render() {
        let tabs = this.props.data.map(item => {
            let selected = item.value == this.state.selected ? 'selected' : '';
            return <li data-value={item.value} className={selected} onClick={this.handleClick}>{item.name}</li>
        })
        return (
            <div className="tab-selected">
                <label>{this.props.label}</label>
                <ul>
                    {tabs}
                </ul>
            </div>
        )
    }
}
ReactDOM.render(
    <SelectTab/>,
    document.getElementById('app')
);
