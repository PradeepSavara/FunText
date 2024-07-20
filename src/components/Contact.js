import React from 'react'
import Swal from 'sweetalert2'

function Contact(props) {
  const inputName =
  {
    padding:'10px',
    borderRadius:'15px',
    boxShadow:'2px 2px aqua'
  }
  const label =
  {
    fontSize:'20px',
    fontFamily:'bold'
  }
  const pad =
  {
    paddingTop:'30px'
  }
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "8abfd081-3b4a-40e7-8345-ae42ee304405");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };
  return (
    <div className={`form text-${props.mode === 'light'?'dark':'white'}`}>
      <center>
        <form style={pad} onSubmit={onSubmit}>
          <h1 style={{fontFamily:'sanSerif',textDecoration:'underline',fontSize:'30px'}}>CONTACT ME!</h1><br/>
          <label style={label}>NAME :  <input type='text' name='name' placeholder='enter ur name' style={inputName}/></label><br/><br/>
          <label style={label}>E-MAIL :  <input type='email' name='email' placeholder='enter ur mail' style={inputName} required/></label><br/><br/>
          <textarea className='form' name='message' rows='5' placeholder='Leave your message :' style={{backgroundColor:props.mode === 'light'?'white':'#131554',color:props.mode==='light'?'dark':'white',width:'350px',borderRadius:'15px',padding:'15px'}}/><br/>
          <button type="submit" className="btn btn-primary btn-lg btn-block" style={{fontFamily:'sanSerif',letterSpacing:'2px'}} >Send Message</button>

        </form>
        </center>
    </div>
  )
}

export default Contact
