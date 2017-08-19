import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
  state = {
    contacts: []
  }


  removeContact = (contact) => {
    this.setState( (state) => ({
      contacts: state.contacts.filter((c) => c.id !== contact.id)
    }))
  }
  
  componentDidMount() {
    ContactsAPI.getAll().then((data) => {
      this.setState({contacts: data})
    })
  }

  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} removeContact={this.removeContact} />
      </div>
    )
  }
}

export default App
