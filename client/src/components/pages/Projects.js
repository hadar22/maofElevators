import React,{useEffect, useState} from 'react'
import '../../App.css'
import './Projects.css'

function Projects() {

    return(
        <div className="projects">
            
            <h1 className='title'> פרויקטים קיימים</h1>
            
            <div className='photoContainer'>
            
                <div class="row">
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 transform-on-hover">
                       
                                <div className='scroll'>
                                    <img  src='/projects/rshlaz/rshlz.jpeg' alt="Card Image" class="card-img-top"/>
                                    <img  src='/projects/rshlaz/rshlz1.jpeg' alt="Card Image" class="card-img-top"/>
                                    <img  src='/projects/rshlaz/WhatsApp Image 2022-05-16 at 09.17.32.jpeg'alt="Card Image" class="card-img-top"/>
                                    <img  src='/projects/rshlaz/WhatsApp Image 2022-05-16 at 09.17.33.jpeg' alt="Card Image" class="card-img-top"/>

                                </div>
                            
                            <div class="card-body">
                                <h6>
                                    <h1> בית פרטי-ראשון לציון</h1>
                                </h6>
                                <p class="text-muted card-text">הוספת מעלון בבית פרטי</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 transform-on-hover">
                            
                                
                                <div className='scroll'>
                                    <img  src='/projects/bentzion/bentzion1.jpeg' alt="Card Image" class="card-img-top"/>
                                    

                                </div>
                            
                            <div class="card-body">
                                <h6>
                                    <h1>שדרות בן ציון-תל אביב</h1>
                                </h6>
                                <p class="text-muted card-text">הוספת מעלית בבניין קיים, בתוך חדר המדרגות. שימור מבנים עתיקים</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                        <div class="card border-0 transform-on-hover">
                                
                                <div className='scroll'>
                                    <img  src='/projects/mendel/WhatsApp Image 2022-05-01 at 21.40.05.jpeg' alt="Card Image" class="card-img-top"/>
                                    <img  src='/projects/mendel/WhatsApp Image 2022-05-01 at 21.40.05 (1).jpeg' alt="Card Image" class="card-img-top"/>
                                    <img  src='/projects/mendel/WhatsApp Image 2022-05-01 at 21.40.06.jpeg'alt="Card Image" class="card-img-top"/>
                                   

                                </div>
                            
                            <div class="card-body">
                                <h6>
                                    <h1> בית פרטי-ראשון לציון</h1>
                                </h6>
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