import '../App.css'
import Layout from '../components/Layout/Layout'
import '../components/Home/Home.css'
import joyPicture from '../images/joy.png'
import earlPicture from '../images/earl.png'
import cityHall from '../images/vanzandt.jpeg'
import trust from '../images/trust.png'
import essential from '../images/essentialpic.png'
import local from '../images/localicon.png'

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
          <img src={cityHall} className="city-hall" />
        </div>
        <div className="creator-section">
          <h1>Special Thanks to our creators:</h1>
          <div className="creator-div">
            <div>
              <img className="creator-pic" src={joyPicture} />
              <h4>Margaret Joy</h4>
            </div>
            <div>
              <img className="creator-pic" src={earlPicture} />
              <h4>Charlie Earl</h4>
            </div>
          </div>
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
        <div className="attributes">
          <div className="attributes-sections">
            <img className="hands" src={trust} />
            <h2 className="trust-h2">Trustworthy</h2>
            <p className="trust-p">
              Secure page trusted by the entire community
            </p>
          </div>
          <div className="attributes-sections">
            <img className="hands" src={essential} />
            <h2>Essential</h2>
            <p>Read relevant information updated daily in real time.</p>
          </div>
          <div className="attributes-sections">
            <img className="hands" src={local} />
            <h2>Local</h2>
            <p>Connect with others instantly in your area.</p>
          </div>
        </div>
      </div>
      <footer>
        <h2>Check out these places in our area:</h2>
        <div className="footer-container">
          <div className="entertainment-container">
            <h3 className="footer-title">Entertainment:</h3>
            <div className="entertainment-list">
              <ul>
                <li>
                  <a href="https://www.firstmondaycanton.com/" target="_blank">
                    First Monday/Trade Days
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.splashkingdomwaterpark.com/canton-paradise-island/"
                    target="_blank"
                  >
                    Splash Kingdom
                  </a>
                </li>
                <li>
                  <a href="https://www.yesterlandfarm.com/" target="_blank">
                    Yesterland Farms
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="food-container">
            <h3 className="footer-title">Food/Drink:</h3>
            <div className="food-list">
              <ul>
                <li>
                  <a href="https://www.yesterlandfarm.com/" target="_blank">
                    Applebees
                  </a>
                </li>
                <li>
                  <a href="https://www.thekickinmule.com/" target="_blank">
                    The Kickin Mule
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/cantontexasusa/?paipv=0&eav=AfZaLs_KF1NDVNpo2ptIldUAANt7duIfZRKFcJC1FzKKRFBW1MqVPG_rIM0f6864kX8&_rdr"
                    target="_blank"
                  >
                    Ole West Bean & Burger
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="shop-container">
            <h3 className="footer-title">Shop Local:</h3>
            <div className="shop-list">
              <ul>
                <li>
                  <a href="https://trwboutique.com/" target="_blank">
                    Rancher's Wife
                  </a>
                </li>
                <li>
                  <a href="https://thepicketfencetexas.com/" target="_blank">
                    The Picket Fence
                  </a>
                </li>
                <li>
                  <a href="https://southernaccents.shop/" target="_blank">
                    Southern Accents
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  )
}

export default Home



