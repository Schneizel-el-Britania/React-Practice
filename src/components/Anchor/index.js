const { Component } = require("react");

export class Anchor extends Component {
  render() {
    const { className, href, target, text } = this.props;
    return <a href={href} target={target} className={className}>{text}</a>
  }
}
