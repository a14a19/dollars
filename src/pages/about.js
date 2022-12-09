import classes from './about.module.scss';

function About() {
    return (
        <div className={classes.about}>
            <h3>Dollars</h3>
            <br/>
            <p>I got inspired to make "Dollars" as I watched an anime <b>"Durrarai!"</b>. Although my purpose for creating this app was just to connect with people.</p>

            <p>Also, I got my other inspiration from the classes I've been taking for MERN-Stack Developer (at <a href='https://www.edyoda.com/home' target='_blank' rel='noreferrer'> Edyoda Digital University</a>). We were taught about CRUD operations in React classes by <a href='https://www.justdecode.me/' target='_blank' rel='noreferrer'> Mr. Rakesh Sir</a>.</p>

            <p>Few key points I'd like to add for the WebApp, I'm only controlling the Front-End of this app and Back-End is being controlled by <a href='https://crudcrud.com/' target='_blank' rel='noreferrer'> 'crudcrud.com'</a>. You can visit this webpage, you will notice this webpage gives an API endpoint for 24 hours and we can use that endpoint for making 100 API call, this include all - get, post, put and delete request. For the time being, I'm updating the endpoint as soon as they expire and maintaining the app.</p>
            <br/>
            <p>For feedback or any inconvenience, please contact - <a href='mailto:anas31197@gmail.com'>anas31197@gmail.com</a> or <a href='tel:+918251039590'>+918251039590</a> or <a href="https://wa.me/+18507248774" target='_blank' rel='noreferrer'>+18507248774</a> (whatsapp only).
            </p>

        </div>
    )
}

export default About;