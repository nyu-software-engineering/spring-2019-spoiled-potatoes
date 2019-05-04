import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
// import logo from './logo.svg';
//import './App.css';
import AlbumSearch from './AlbumSearch';
import AlbumListComponent from './AlbumListComponent'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      random: [],
      popular: [],
      last_added: [],
      most_liked: [],
      trending: [],
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    axios.get('/get_random').then(response => {
      console.log('component will mount response');
      console.log(response.data);
      var test = response.data
      this.setState({
        random: test
      });
    })
    axios.get('/get_most_popular').then(response => {
      console.log('component will mount response');
      console.log(response.data);
      let test = response.data
      this.setState({
        popular: test
      });
    })
    axios.get('/get_last_added').then(response => {
      console.log('component will mount response');
      console.log(response.data);
      let test = response.data
      this.setState({
        last_added: test
      });
    })
    axios.get('/get_most_liked').then(response => {
      console.log('component will mount response');
      console.log(response.data);
      let test = response.data
      this.setState({
        most_liked: test
      });
    })
    axios.get('/get_trending').then(response => {
      console.log('component will mount response');
      console.log(response.data);
      let test = response.data
      this.setState({
        trending: test
      });
    })

  }

  render() {
    console.log(this.props.username)

    return (
      <Container >
        <div class="jumbotron-home jumbotron p-4 p-md-5 text-white rounded bg-dark">
          <h1 class="display-4 font-italic">Welcome to Spoiled Potatoes{this.props.username ? ', ' + this.props.username : null}!</h1>
          <p class="lead my-3">
            Review and explore more music!
          </p>
        </div>
        <AlbumSearch appComponent={this.props.appComponent} username={this.props.username} />
        <Row>
          <Col>
            <h3>Most Popular</h3>
            <Row><AlbumListComponent albums={this.state.popular} /></Row>
          </Col>
          <Col>
            <h3>Most Liked</h3>
            <Row><AlbumListComponent albums={this.state.most_liked} /></Row>
          </Col>
          <Col>
            <h3>Trending</h3>
            <Row><AlbumListComponent albums={this.state.trending} /></Row>
          </Col>
          <Col>
            <h3>Last Added</h3>
            <Row><AlbumListComponent albums={this.state.last_added} /></Row>
          </Col>
          <Col>
            <h3>Random</h3>
            <Row><AlbumListComponent albums={this.state.random} /></Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
