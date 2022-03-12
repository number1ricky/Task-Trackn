import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>Routed with React Router DOM</p>
      <h1>Thank you for coming :)</h1>
      <Link to="/">Go Back</Link>
    </div>
  )
}

export default About
