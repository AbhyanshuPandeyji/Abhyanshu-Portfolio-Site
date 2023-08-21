import React , {useState , useRef, Fragment } from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser";


import { styles } from '../styles'
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


// Emailjs service-
// email id template - template_gphu9xp
// service id - service_rlqxlr8
// public key - yAf-8ZB9m2Zt4XdWJ
// private key - 88dRcrHaXv9TK9NQpNUhA

const Contact = () => {

  const formRef = useRef();

  const [ form , setForm ] = useState({
    name: "",
    email: "",
    message: ""

  });

  const [loading , setLoading ]  = useState(false);

  const handleChange = (e) => {
    // we have gone two steps in deep
    const { name , value } = e.target;


    // now we can enter the detail - update these fields and enter our data
    setForm({ ...form , [name]: value })
    
    
  }

  // most important part of the contact 
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // send - ( service id , template id , options{ your form data } , public key )
    emailjs.send(
      "service_rlqxlr8" , 
      "template_gphu9xp",
      {
        from_name : form.name,
        to_name: "Abhyanshu",
        from_email : form.email,
        to_email: 'pandatbhaihaikya@gmail.com',
        message: form.message,

      } 

      , 
      "yAf-8ZB9m2Zt4XdWJ"
      
      )
      .then(()=>{
        setLoading(false);
        alert(`I will get back to you as soon as possible.`);

        setForm({
          name:"",
          email:"",
          message:"",
        })
      }, (error)=>{
        setLoading(false);
        console.log(error);
        alert(`Something went wrong.`)
      } )
    


  }



  return (
    <Fragment>
      {/* flex col reverse is used to display this form below the earth even though we are using earth after the div of form
      helps us to not write code to shift the earth to the right side for our form to show in the left */}
      
      {/* main div */}
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        {/* left div - in mobile - bottom div */}
        <motion.div
          variants={slideIn("left" , "between" , 0.2 , 1 )}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl '
        >
          <p className={styles.sectionSubText}>Get In Touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form 
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's Your Name?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outlined-none border-none font-medium '
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your E-mail</span>
              <input 
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's Your E-Mail?"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outlined-none border-none font-medium '
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Message</span>
              <textarea
                style={{resize:"none"}}
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say"
                className='bg-tertiary py-4 px-6 placeholder:text-secondary 
                text-white rounded-lg outlined-none border-none font-medium '
              />
            </label>

            <button 
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white 
              font-bold shadow-md shadow-primary rounded-xl'
            >
            {loading ? "Sending..." : "Send" }

            </button>

          </form>
        </motion.div>

        {/* secondary div - right side div - on smaller devices top div */}
        {/* creating a height of the canvas on which the earth will be displayed */}
        <motion.div
          variants={slideIn("right" , "between" , 0.2 , 1 )}
          // the flex-1 takes up the whole one space , no partitions - full width contain
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas/>
        </motion.div>
      </div>
    </Fragment>
  )
}

export default SectionWrapper(Contact , "contact");