import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import { MdOutlineEmail } from "react-icons/md";
import toast, { Toaster } from 'react-hot-toast';
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";


const Contact = () => {

  const GetMeWhatsapp = () => {
     return  window.open('https://wa.link/c2kloe', '_blank');
    };

    const form = useRef();
    const notifyError = () => toast.error("Error interno​, lo siento NO se hizo el envio 😓📨​",
    {
        icon: '❌​',
        style: {
          border:'1px solid red',
          borderRadius: '5px',
          background: '#333',
          color: '#fff',
        },
      }
    );
    const notify = () => toast('✔️​ Email enviado 🎉... 📨​!',
    {
      icon: '✨​',
      style: {
        borderRadius: '5px',
        background: '#1f1638',
        color: '#4db5e3',
      },
    }
  );
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_tc1f5qc', 'template_cux9ajn', form.current, 'EqyiQ_qLXdi8v3bHT')
       
        .then((result) => {
            console.log("Enviandoo... "+result.text);
            e.target.reset()
            notify();
        }, (error) => {
            console.log(error.text);
            e.target.reset()
            notifyError();
        });
    };


    return (
        <section id="contact" className="contact">
                  <h5>Get in Touch</h5>
                 <div className="container__title">
                   <h2 className="name-main">· Contact Me · </h2>
                 </div>

                 <div className="contact__container ">
                    <div className="contact__opcions">
                      
                        <article className="contact__opction" >
                        <MdOutlineEmail />
                            <h4>Email</h4>
                            <small><h5>kasn.emprendedor@gmail.com</h5></small>
                            <a href="mailto:kasn.emprendedor@gmail.com" target="_blank">
                                Send a Email
                            </a>
                        </article>

                        <article className="contact__opction" onClick={GetMeWhatsapp}>
                        <BsWhatsapp className="icono__whatsapp"/>
                            <h4>Whatsapp</h4>
                            <h5>+573125906937</h5>
                            <a href="https://wa.link/c2kloe" target="_blank">
                                Send a message
                            </a>
                        </article>
                    </div>
                    {/* FIN DEL CONTACT */}
                    <div className="formulario__contact">
                        <form action="" ref={form} onSubmit={sendEmail}>
                            <input type="text" name="name" placeholder="Tú nombre" autoComplete="off" required/>
                            <input type="email" name="email" pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  placeholder="Tú email" autoComplete="nope" required  id="emailing"/>
                            <textarea name="message" required id="messade" placeholder="Aqui puedes enviarme un message, llegara directamente a mi email.... 📨​" autoComplete="noe" rows="7"></textarea>
                            <div className="btn__container--contact">
                            <button type="submit" className="btn__contact"> Enviar... <BiMailSend size="20"/></button>
                            </div>
                        </form>
                        <Toaster 
                         position="bottom-left"
                         reverseOrder={true}
                        />
                    </div>
                 </div>
        </section>
   
    )
}

export default Contact
