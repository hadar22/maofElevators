import React,{useEffect, useState} from 'react'
import '../../App.css'
import './Projects.css'

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

function Projects() {

  const [current, setCurrent] = useState(0);
  const [current1, setCurrent1] = useState(0);
  const [current2, setCurrent2] = useState(0);

  const rshlaz = [
    {image: '/projects/rshlaz/rshlz.jpeg'},
    {image: '/projects/rshlaz/rshlz1.jpeg'},
    {image: '/projects/rshlaz/WhatsApp Image 2022-05-16 at 09.17.32.jpeg'},
    {image: '/projects/rshlaz/WhatsApp Image 2022-05-16 at 09.17.33.jpeg'}
];
  const length = rshlaz.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
    
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
    
  if (!Array.isArray(rshlaz) || rshlaz.length <= 0) {
    return null;
  }
  const Slider1 = [
    {img: '/projects/mendel/WhatsApp Image 2022-05-01 at 21.40.05.jpeg'},
    {img:'/projects/mendel/WhatsApp Image 2022-05-01 at 21.40.05 (1).jpeg'},
    {img: '/projects/mendel/WhatsApp Image 2022-05-01 at 21.40.06.jpeg'}
  
    ];
    
  const len = Slider1.length
  const nextSlide1 = () =>{
    setCurrent1(current1 === len - 1 ? 0 : current1 + 1);
  };
  const prevSlide1 = () => {
    setCurrent1(current1 === 0 ? len - 1 : current1 - 1);
  };
    
  if (!Array.isArray(Slider1) || Slider1.length <= 0) {
    return null;
  }
  const bentzion = [
    {image: '/projects/bentzion/bentzion1.jpeg' }
  ];
  const len2 = bentzion.length
  const nextSlide2 = () =>{
    setCurrent2(current2 === len2 - 1 ? 0 : current2 + 1);
  };
  const prevSlide2 = () => {
    setCurrent2(current2 === 0 ? len2 - 1 : current2 - 1);
  };
    
  if (!Array.isArray(bentzion) || bentzion.length <= 0) {
    return null;
  }
    return(
        <div className="projects">
            
            <h1 className='title-projects'> פרויקטים קיימים</h1>
            
            <div className='photoContainer'>
            
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 transform-on-hover">

                          <section className='slider'>
                            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
                            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
                            
                            {rshlaz.map((slide, index) => {
                              return (
                              <div
                               className={index === current ? 'slide active' : 'slide'}
                               key={index}
                              >
                                {index === current && (
                                <img src={slide.image} alt='travel image' className='image' />
                                )}
                              </div>
                           );
                           })}
                         </section>
                            
                            <div class="card-body">
                                
                                <h1 className='title-card'> בית פרטי-ראשון לציון</h1>
                                
                                <p class="text-muted card-text">הוספת מעלון בבית פרטי</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 transform-on-hover">
                            
                                
                        <section className='slider'>
                            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide2} />
                            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide2} />
                            
                            {bentzion.map((slide, index) => {
                              return (
                              <div
                               className={index === current2 ? 'slide active' : 'slide'}
                               key={index}
                              >
                                {index === current2 && (
                                <img src={slide.image} alt='travel image' className='image' />
                                )}
                              </div>
                           );
                           })}
                         </section>
                            
                            <div class="card-body">
                                
                                <h1 className='title-card'>שדרות בן ציון-תל אביב</h1>
                                
                                <p class="text-muted card-text">הוספת מעלית בבניין קיים, בתוך חדר המדרגות. שימור מבנים עתיקים</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 transform-on-hover">
                                
                          <section className='slider'>
                            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide1} />
                            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide1} />
                            {Slider1.map((slide, index) => {
                              return (
                              <div
                              className={index === current1 ? 'slide active' : 'slide'}
                              key={index}
                              >
                                {index === current1 && (
                                <img src={slide.img} alt='travel image' className='image' />
                                )}
                              </div>
                             );
                           })}
                         </section>
                            
                            <div class="card-body">
                                <h1 className='title-card'> בית פרטי-ראשון לציון</h1>
                                
                                <p class="text-muted card-text">הוספת מעלית פנורמית בבית פרטי</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      
    
        
        
        
    </div>
    );
}
export default Projects
/*<div className='albom'>
            <div className='padding_hf_h'>
                <div className='position_r'>
                    <div className='royalSlider' tabindex='0' data-fullscreen data-append data-prepend data-width='1000' data-height='790' data-dir='rtl' data-autoplay data-speed data-delay data-transition='fade' data-autohide data-arrows data-nav='Array' data-imagescalemode data-init='true' style='height:329.693px;'>
                        <div className='rsOverflow' style='width:417.333px; height:329.688px;'>
                            <div className='rsContainer'>
                                <div ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div> */