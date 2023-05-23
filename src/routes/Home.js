import '../App.css'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import '../components/Home/Home.css'
import joyPicture from '../images/joy.png'
import earlPicture from '../images/earl.png'
import cityHall from '../images/vanzandt.jpeg'

function Home () {
  return (
    <Layout>
      <div className="home-layout">
        <div className="section-1">
          <h1 className="title-h1">Van Zandt County Community Chat</h1>
          <p>
            Get the latest in updates, reports, gossip, trends, deals and more
            by following our county wide community page.{' '}
          </p>
          <p>
            {' '}
            For Van Zandt County and surrounding areas. Neighbors can buy/sell
            items, post alerts, ask for help or even try to make friends with
            your neighbors.{' '}
          </p>
          <p>Welcome to the community! </p>
          <img src={cityHall} />
        </div>
        <div className="creator-section">
          <h1>Special Thanks to our creators:</h1>
          <img className="creator-pic" src={joyPicture} />
          <h4>Margaret Joy</h4>
          <img className="creator-pic" src={earlPicture} />
          <h4>Charlie Earl</h4>
          <p>
            Margaret and Charlie were the masterminds behind the creation of
            this site.{' '}
          </p>
          <p>
            {' '}
            Sitting inside Dairy Palace they had a vision of a more tight knit
            community.
          </p>
          <p>
            To do this, they needed to create an online environment to join the
            county together.
          </p>
        </div>
        <img />
        <h2>Trustworthy</h2>
        <p>Secure page trusted by the entire community</p>
        <img />
        <h2>Essential</h2>
        <p>
          Post anywhere using your computer or smart phone. Check out the latest
          no matter where you are. Read relevant information updated daily in
          real time.
        </p>
        <img />
        <h2>Local</h2>
        <p>
          Connect with others instantly in your area. Learn about local shops
          and entertainment near you. Get the latest updates on current events
          around your home.
        </p>
      </div>
      <div>
        <h1>A little about Van Zandt...</h1>
        <p />
      </div>
      <footer>
        <h3>Helpful Links:</h3>
        <h5>Entertainment:</h5>
        <h5>Food/Drink:</h5>
        <h5>Shop Local:</h5>
      </footer>
    </Layout>
  )
}

export default Home

