import ReactDOM from 'react-dom/client' 
import WeatherApp from './views/WeatherMain' 
import './styles/style.scss' 
const root = ReactDOM.createRoot(document.getElementById('root')) 
root.render(
<div className="main-container">
    <WeatherApp />
  </div>
)
