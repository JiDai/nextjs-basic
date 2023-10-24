import Head from "../components/Head";
import Navigation from "../components/Navigation";

import Router from 'next/router';


export default function IndexPage() {
    // useEffect(() => {
    //     Router.beforePopState(({url, as, options}) => {
    //         console.log('url, as, options: ', url, as, options)
    //         window.location.href = as;
    //
    //         return true;
    //     });
    // }, [])
    return (
        <div>
            <Head>
                <title>Home</title>
            </Head>
            <Navigation/>

            <h1>Hello World.</h1>
        </div>
    );
}
