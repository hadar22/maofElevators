import React,{useEffect, useState} from 'react'
import '../../App.css'
import './AboutUs.css'

function AboutUs(){
    return (
        <div className='aboutUs'>
            <h1 className='title-service'>אודותינו</h1>
            <img className='photo-service' src='/aboutus.jpeg'/>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-crown"></i></div>
                <p className='ppp'>מעוף מעליות הינה חברה משפחתית בעלת יותר מ-30 שנות ניסיון
                    ומוניטין בייצור, בעיצוב ובהתקנה של מעליות
                </p>
            </div>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-pencil-ruler"></i></div>
                <p className='ppp'> אנשי המקצוע אצלנו הם מומחים בתפירה אישית של המעלית הכי כדאית - בהתאם לכל צורך ודרישה
                </p>
            </div>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-clipboard-list"></i></div>
                <p className='ppp'> כל מעלית מיוצרת בהתאמה יחודית ומדויקת לדרישות הלקוח בכל גודל אפשרי
                </p>
            </div>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-medal"></i></div>
                <p className='ppp'>היחס האישי אצלנו מבטיח טיפול צמוד ומקצועי בכל פרויקט - לשביעות רצון כל הלקוחות.
                הצוות שלנו עושה את המרב והמיטב ומגשימים את החלום של הלקוח כל פעם מחדש
                </p>
            </div>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-archive"></i></div>
                <p className='ppp'> השירות כולל ייעוץ והדרכה, ליווי מקצועי צמוד של ועד הבית, ניסוח פרוטוקול החלטות והנפקת היתרי בנייה ממהנדסים, מיועצים ומעירייות 
                </p>
            </div>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-arrow-up"></i></div>
                <p className='ppp'>מעוף מעליות מייצרת מעליות ברמה בינלאומית גבוהה, תוך שימוש ברכיבים איכותיים המיוצרים באיטליה ובגרמניה. רכיבי המעליות של מעוף מעליות מגיעים מהחברות הגדולות ביותר בתחום, דבר המאפשר גמישות בתכנון, בייצור ובהתקנה
                </p>
            </div>
            <div className='Paragraph'>
                <div className ='icon-about'><i class="fas fa-smile-beam"></i></div>
                <p className='ppp'> לאחר ההתקנה, אנשי המקצוע שלנו מספקים הסברי שימוש ותחזוקה מונעת - וכל עבודה מגובה באחריות מקצועית מלאה למשך שנתיים. החברה מחוייבת למתן שירות מקצועי לאורך כל הדרך, ומן היתרונות נהנים הלקוחות 
                </p>
            </div>
        </div>
       
    );
}
export default AboutUs;