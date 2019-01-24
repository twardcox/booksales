import update from 'immutability-helper'
import React from 'react'
import ReactDOM from 'react-dom'

const Table = ({ price, qty }) =>
  <table className="table table-bordered table-responsive">
    <thead>
      <tr>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{price.toFixed(2)}</td>
        <td>{qty}</td>
        <td>{(price * qty).toFixed(2)}</td>
      </tr>
    </tbody>
  </table>

const Button = ({ qty, handleClick, index, changeBy, label }) =>
  <button disabled={label == "Less" && qty < 1 ? true : false} onClick={() => handleClick(index, changeBy)} className='btn btn-primary'>{label}</button>

const ClearButton = ({ handler, label }) =>
  <div>
    <button onClick={handler} className='btn btn-primary'>{label}</button>
  </div>

const ItemCard = props =>
  <div className='col-sm-4'>
    <div className='card text-black bg-success text-center' style={{ margin: '4rem', padding: '1rem', border: '1px solid rgba(0,0,0, 0.125' }} >
      <div className='card-header bg-primary text-white' >
        <p>{props.category}</p>
      </div>
      <div className='card-body' >
        <h4 className='card-title' >{props.title}</h4>
        <p className='cardtext' >{props.text}</p>
      </div>
      <Table {...props} />
      <Button {...props} changeBy={-1} label='Less' />
      <Button {...props} changeBy={1} label='More' />
    </div>
  </div>

const Row = props =>
  <div className='row' >
    {props.catalog.map((item, index) => <ItemCard key={index} index={index}{...item} {...props} />)}
  </div>

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleClear = this.handleClear.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      catalog: [{
        category: 'Movie',
        title: 'The Empire Strikes Back',
        text: 'The Empire Strikes Back (also known as Star Wars: EpisodeV -- The Empire Strikes  Back) is a 1980 American epic space opera film',
        price: 12.59,
        qty: 0
      },
      {
        category: 'Movie',
        title: 'For Whom the Bell Tolls',
        text: 'For Whom the Bell Tolls is a novel by Ernest Hemingway published in 1940. It tells the story of Robert Jordan, a young American in the International Brigades attached to a republican guerrilla unit during the Spanish Civil War. As a dynamiter, he is assigned to blow up a bridge during an attack on the city of Segovia',
        price: 9.98,
        qty: 0
      },
      {
        category: 'Movie',
        title: 'The Brother\'s Karmazov',
        text: 'The Brothers Karamazov, also translated as The Karamazov Brothers, is the final novel by the Russian author Fyodor Dostoevsky. Dostoevsky spent nearly two years writing The Brothers Karamazov, which was published as a serial in The Russian Messenger from January 1879 to November 1880.',
        price: 15.5,
        qty: 0
      },
      {
        category: 'Music',
        title: 'Metallica: Ride the Lightning',
        text: 'Ride the Lightning is the second studio album by American heavy metal band Metallica, released on July 27, 1984, by the independent record label Megaforce Records. The album was recorded in three weeks with producer Flemming Rasmussen at the Sweet Silence Studios in Copenhagen, Denmark.',
        price: 13.46,
        qty: 0
      },
      {
        category: 'Book ',
        title: 'The Girl with the Dragon Tattoo',
        text: 'Disgraced financial reporter Mikael Blomkvist (Daniel Craig) finds a chance to redeem his honor after being hired by wealthy Swedish industrialist Henrik Vanger (Christopher Plummer) to solve the 40-year-old murder of Vanger\'s niece, Harriet. Vanger believes that Harriet was killed by a member of his own family. Eventually joining Blomkvist on his dangerous quest for the truth is Lisbeth Salander (Rooney Mara), an unusual but ingenious investigator whose fragile trust is not easily won.',
        price: 7.98,
        qty: 0
      },
      {
        category: 'Book',
        title: 'React Quickly',
        text: 'Summary React Quickly is for anyone who wants to learn React.js fast. This hands-on book teaches you the concepts you need with lots of examples, tutorials, and a large main project that gets built throughout the book.',
        price: 12.59,
        qty: 0
      }]
    }
  }

  get grandTot() {
    return this.state.catalog.reduce((acc, item) => acc += (item.price * item.qty), 0)
  }

  handleClick(index, changeBy) {
    const newstate = update(this.state, {
      catalog: {
        [index]: { qty: { $apply: (q) => q + changeBy } }
      }
    });

    this.setState(newstate);
  }



  handleClear(event) {
    this.setState(this.state.catalog.map((element) => {
      element.qty = 0
      return element
    }))
  }

  render() {
    return (
      <div>
        <Row {...this.state} handleClick={this.handleClick} />
        <h3>Grand Total: ${this.grandTot.toFixed(2)}</h3>
        <ClearButton handler={this.handleClear} label='Clear All' />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

export default App