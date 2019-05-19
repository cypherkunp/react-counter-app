import React, { Component } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import './App.css';

class App extends Component {
  state = {
    counters: [{ id: 1, value: 0 }],
    idIndex: 1,
    totalCount: 0
  };

  componentDidMount() {
    let totalCount = 0;
    this.state.counters.forEach(counter => (totalCount += counter.value));
    this.setState({ totalCount });
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters, totalCount: 0 });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters, totalCount: this.state.totalCount + 1 });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
      counters[index].value--;
      this.setState({ counters, totalCount: this.state.totalCount - 1 });
    }
  };

  handleDelete = counter => {
    const counters = this.state.counters.filter(c => c.id !== counter.id);
    this.setState({ counters, totalCount: this.state.totalCount - counter.value });
  };

  handleAdd = () => {
    const counters = [...this.state.counters];
    const idIndex = this.state.idIndex + 1;
    counters.push({ id: idIndex, value: 0 });
    this.setState({ counters, idIndex });
  };

  render() {
    console.log('App - Rendered');
    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.length} totalCount={this.state.totalCount} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onAdd={this.handleAdd}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </div>
    );
  }
}

export default App;
