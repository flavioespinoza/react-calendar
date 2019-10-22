import React, { Component } from 'react';

class FlavioClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello Flavio Class Component!!! :)',
      subtitle: undefined,
    };
  }
  componentDidMount() {
    this.setState({
      subtitle: this.props.subtitle,
    });
  }
  render() {
    const { title, subtitle } = this.state;

    return (
      <div style={{ padding: 42 }}>
        <h1>{title}</h1>
        {subtitle ? <h5>{subtitle}</h5> : null}
      </div>
    );
  }
}

export default FlavioClass;