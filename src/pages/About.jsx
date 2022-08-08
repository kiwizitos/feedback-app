import { Link } from 'react-router-dom'

import Card from '../components/shared/Card'

const About = () => {
  return (
    <Card>
      <div className='about'>
        <h1>About</h1>
        <p>
          This is a simple feedback form built with React and Framer Motion.
        </p>
        <p>version 1.0.0</p>

        <p>
          <Link to='/'>
            <button>Back to Feedback Form</button>
          </Link>
        </p>
      </div>
    </Card>
  )
}

export default About
