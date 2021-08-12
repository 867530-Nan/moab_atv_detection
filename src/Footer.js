import Logo from './blync_logo.png'

const Footer = () => (
  <a 
    href="https://www.blyncsy.com" 
    target="_blank" 
    rel="noopener noreferrer" 
    alt="Hyperlink to Blyncsy Website"
    style={{
      height: 75, 
      background: 'linear-gradient(90deg, rgba(255,86,86) 0%, rgba(247,255,86) 100%)', 
      width: '100%', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center'
    }}
  >
    <img src={Logo} style={{width: 200}} alt="Blyncsy Logo"/>
  </a>
)

export default Footer