import React, {Component} from 'react';
import Persons from './persons.view';
import axios from 'axios';
import soundFile from './RickAudio.mp3';
//setState()


class Person extends Component {
  state = {
    name: this.props.name || '',
    image: this.props.image || '',
  }
  render() {
    return (
      <Persons.BackgroundDiv>
       <img src={this.state.image} alt={this.state.name} width="150"/>
        <h3>{this.state.name}</h3>
      </Persons.BackgroundDiv>
  )};
}



class PersonsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      audio: new Audio(soundFile),
      persons: '',
      image: '',
      isEditPrev: true,
      isEditNext: true,
      typePrev: '',
      typeNext: '',
      info: '',
      next:  null ,
      prev:  null ,
    }
    this.getPersons()
  }

getPersons = () => {
  axios.get('https://rickandmortyapi.com/api/character/')
  .then(({data}) => {
this.setState({persons: data.results, image: data.image, info: data.info, next: data.info.next, prev: data.info.prev })
this.getTypes();
this.state.audio.play();
console.log (this.state.persons.length, 'long');
console.log(this.state.persons, 'info');
 console.log(this.state.info, 'info');
 console.log(this.state.next, 'next');
 console.log(this.state.isEdit, ' isEdit');
 console.log(this.state.prev, 'prev');
  })
}

getTypes = () => {
  if (this.state.prev != '') {
    this.setState({isEditPrev: true, typePrev: "ACTIVE"})
  }else{
    this.setState({isEditPrev: false, typePrev: "PASIVE"})
  }
  if (this.state.next != '') {
    this.setState({isEditNext: true, typeNext: "ACTIVE"})
  }else{
    this.setState({isEditNext: false, typeNext: "PASIVE"})
  }
}

prevClick = () => {
  console.log(this.state.isEditPrev);
  if(this.state.isEditPrev != false) {
  this.state.audio.play();
  axios.get(this.state.prev)
  .then(({data}) => {
this.setState({persons: data.results, image: data.image, info: data.info, next: data.info.next, prev: data.info.prev })
this.getTypes();
  })
}
}

nextClick = () => {
if(this.state.isEditNext != false) {
  this.state.audio.play();
  axios.get(this.state.next)
  .then(({data}) => {
this.setState({persons: data.results, image: data.image, info: data.info, next: data.info.next, prev: data.info.prev })
this.getTypes();
  })
}
}

render() {
    return(
      <div>
      <Persons.GlobalDiv>
      {this.state.persons ?
         this.state.persons.map(person =>
          <Person {...person} key={person.id}/>
        ) : <Persons.loader/>
      }
      </Persons.GlobalDiv>
        <Persons.Buttons type={this.state.typePrev} onClick = {this.prevClick}>prev</Persons.Buttons>
        <Persons.Buttons type={this.state.typeNext} onClick = {this.nextClick}>next</Persons.Buttons>
      </div>
    )
  }
}

export default PersonsList;

// Попробовать вытянуть других персонажей по локализации по клику на кнопку