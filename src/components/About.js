import React,{useState} from 'react'
// import 'boxicons'
function About(props) {
    const [hover,setHover] = useState(false);
    const about =
    {
        display :'flex',
        justifyContent:'spacebetween',
        paddingTop:'20px'
    }
    const intro =
    {
        fontSize:'30px',
        paddingTop:'50px',
        paddingLeft:'100px'
    }
    const myname =
    {
        fontFamily:'poppins',
        textDecoration:'bold',
        color:'red',
        fontSize:'50px',
        fontStretch:'ultra-expanded'
    }
    const smile=
    {
        color:hover ? 'green':'orange',
        fontSize:'90px',

    }
    const image = 
    {
        borderRadius:'50%',
        border:'none',
        width:'400px',
        margin:'20px'
    }
    const hello =
    {
        fontSize:'70px'
    }
    const int=
    {
        fontSize:'20px'
    }
  return (
    <div className={`row container-fluid text-${props.mode === 'light'?'dark':'white'}`} style={about}>
        
     <h2 className='para col-md-6' style={intro}>
        <h1 style={hello}>Hello <i className='bx bxs-hand' style={smile} onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}></i>,</h1>
         I'm a <h1 style={myname}>Freelancer Digital Designer and Developer. </h1>
         <p style={int}>I can build websites using front-end and back-end languages.I make the stuff that looks good 
            and works great on planet Earth.
         </p>
     </h2>
     <img src='sp.jpg' alt='Pradeep Savara' style={image} className='col-md-6'/>
     
    </div>
  )
}

export default About
