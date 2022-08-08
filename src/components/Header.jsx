const Header = ({ text }) => {
  const headerStyle = {
    background: 'rgba(0, 0, 0, 0.4)',
    color: '#ff6a95',
  }

  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  )
}

export default Header
