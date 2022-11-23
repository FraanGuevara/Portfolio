import emailjs from '@emailjs/browser';

export const sendMessageForm = async (data)=>{
    await emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, data, process.env.REACT_APP_PUBLIC_KEY)
    .then(res => res.status)
    .catch(err =>console.log(err))
}