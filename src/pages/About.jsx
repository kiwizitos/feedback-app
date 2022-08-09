import { Link } from 'react-router-dom'
import Button from '../components/shared/Button'

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
            <Button version='secondary'>Back to Feedback Form</Button>
          </Link>
        </p>
      </div>
    </Card>
  )
}

export default About
