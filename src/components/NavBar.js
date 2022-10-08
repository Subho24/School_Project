import logo from '../TIS_logo.png'

export const NavBar = () => {
  return (
    <div style={{
      width: '100%',
      minHeight: 64,
      backgroundColor: '#3f51b5'
    }}> 
      <img src={logo} alt='Thoren Innovation School Logo' style={{
        width:150, height: 30, margin: '20px 0px 10px 10px' 
      }} />
    </div>
  )
}