import { Component } from "react";
import axios from 'axios';

class LifeCycle extends Component {
  constructor() {
    super();
    this.state = {
      imageURL: "",
    }
  }

  // useEffect(() => {})
  // Here is where you want to make API calls
  componentDidMount() {
    console.log('Component Did Mount');
    axios.get("https://dog.ceo/api/breeds/image/random")
    
    .then(({data}) => {
      this.setState({imageURL: data.message})
      window.localStorage.setItem("DogURL!", data.message)
    })
  }

  // useEffect(() => {}, [this.state.text])
  // Where you check if state updates and you want to do something
  componentDidUpdate(prevProp, prevState) {
    // clearInterval(this.state.interval)
    console.log('Component Did Update');
  }

  // useEffect(() => { return cleanup })
  // run any clean up
  componentWillUnmount() {
    console.log('Component Unmount');
    
  }

  render() {
    return (
      <div>
        <h1>Life Cycle</h1>
        {this.state.imageURL && <img src={this.state.imageURL} />}
      </div>
    )
  }
}

export default LifeCycle;