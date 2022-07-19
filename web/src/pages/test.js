import React from "react"
import Layout from "../components/layout"
import Test from "../components/test";

const TestPage = ( {location} ) => {
    return (  
        <Layout>
            <h1>{location.state.choice}</h1>
            <Test />

        </Layout>
    );
}
 
export default TestPage;