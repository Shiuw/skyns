import { Link } from 'react-router-dom';
import './style/Home.css'
import kitty from "./dep/img/kitty.jpg"

function Home() {
   return (
       <div className="Home">
            <a href="https://twitter.com/shiuwasi">
                    <img class="imagery" src={kitty} alt="Twitter"/>
                </a>
           <div classname ="Home">

                </div>
                <div>
           <Link to="/skins"><u><font size = "8">go here for skins</font></u></Link>
           </div>
       </div>
   )
}

export default Home;