import { useState, useEffect } from "react";
import Modal from "./Modal";


function Card(props) {
    return (
        <a href="#" className="block mx-auto p-6 bg-white m-6 rounded border border-gray-200 hover:bg-gray-100 ">
            <p className="font-normal text-gray-900 "> {props.children} </p>
        </a>
    )
}

export default function Cards(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setItems] = useState([]);
    const [show, setShowModal] = useState(false);


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

    const toggleModal =(number)=>{
        show? setShowModal(false):setShowModal(true)
        console.log(show)
        props.onButtonClick(number)
    }


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (

            <div>
            <Modal show={show} handleClose={() => toggleModal(0)} index={props.selected}/>
            {response.map((child, index) => (
                <div>
                    <Card>
                        {child.data.title}
                    </Card>
                    <button onClick={(selected_index) => props.onButtonClick(index)}>Hi</button>
                    <button onClick={() =>toggleModal(index)} >Toggle modal</button>

                </div>
            ))}
            </div>
        );
    }
}