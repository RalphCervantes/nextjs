import { useRouter } from 'next/router';

function DetailPage() {
    const router = useRouter();

    console.log(router.query.newsId);

    //Can send this to the backend API to fetch from the database 
    

    return <h1>The Detail Page</h1>
}


export default DetailPage