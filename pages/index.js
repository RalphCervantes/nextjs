import Image from 'next/image';

function HomePage() {
    return(
        <div>
            <h1>The Home Page</h1>
            <h3>This is just a test message</h3>
            <Image
                src='/static/Headshot_2.png'
                alt='Headshot'
                width={450}
                height={600}
            />
            
        </div>
    ) 

}
export default HomePage;