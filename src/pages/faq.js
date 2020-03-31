import React,{ useState,useEffect } from 'react';
import Header from '../components/header';
import FAQ from '../components/faq';

function Faqs() {
    const colors = {
        Sea: '#FFFFFF',
       
      }
      const [color, setColor] = useState(colors.Sea)
      useEffect(
        () => {
          document.body.style.background = color
        },
        [color]
      )      
    return(
    <>
<Header />
<FAQ />
</>
    );
};

export default Faqs;