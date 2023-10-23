import {Link} from 'react-router-dom'

import Header from '../Header'
import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="profile">
        <div className="top">
          <div className="profile-photo">
            <img src="../LoginForm/logo.png" alt="Student DP" />
          </div>
          <div className="info">
            <p>
              Hello, <b>Principal</b>{' '}
            </p>
            <small className="text-muted">Institution</small>
          </div>
        </div>
        <div className="about">
          <h5>Contact</h5>
          <p>1234567890</p>
          <h5>Email</h5>
          <p>principle@shanmugha.edu.in</p>
          <h5>Address</h5>
          <p>Ghost town Road, New York, America</p>
        </div>
      </div>
      <div>
        <h1>Dashboard</h1>
        <iframe src="https://58xnjvzn9jmfofk.sg.qlikcloud.com/single/?appid=3fe66004-1957-4efe-a5cc-171f4d5d8036&sheet=d7a68d4f-ecb3-47bc-920a-a6ffd4fa06f3&theme=horizon&opt=ctxmenu,currsel" style={{border:'none',width:'100%', height:'100%'}}></iframe>
      </div>
    </div>
  </>
)

export default Home
