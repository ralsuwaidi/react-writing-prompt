import { useState, useEffect } from "react";


function Card(props) {
    return (
        <a href="#" class="block mx-auto p-6 bg-white m-6 rounded border border-gray-200 hover:bg-gray-100 ">
            <p class="font-normal text-gray-900 "> {props.children} </p>
        </a>
    )
}

export default function Cards(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setItems] = useState([]);

    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch("https://www.reddit.com/r/WritingPrompts/.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data.children);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            response.map(child => (
                <Card>
                    {child.data.title}
                </Card>
            ))
        );
    }
}