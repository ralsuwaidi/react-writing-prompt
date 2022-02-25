import { useState, useEffect } from "react";
import Modal from "./Modal";
import ReactMarkdown from 'react-markdown'


function Card(props) {
    return (
        <a onClick={function () {
            props.toggle(props.child.data.title);
            props.comment('https://www.reddit.com' + props.child.data.permalink + '.json')
        }} href="#" className="block mx-auto p-6 bg-white m-6 rounded border border-gray-200 hover:bg-gray-100 ">
            <p className="font-normal text-gray-900 "> {props.children} </p>
        </a>
    )
}

function GetComment(url, func) {
    fetch(url)
        .then(function (res) {
            return res.json();   // Convert the data into JSON
        })
        .then(function (data) {
            func(data[1].data.children[1].data.body);   // Logs the data to the console
        })
        .catch(function (err) {
            console.log(err);   // Log error if any
        });

}

export default function Cards(props) {
    const [error, setError] = useState(null);
    const [url, setUrl] = useState("https://www.reddit.com/r/WritingPrompts/.json")
    const [isLoaded, setIsLoaded] = useState(false);
    const [response, setItems] = useState([]);
    const [show, setShowModal] = useState(false);
    const [comment, setComment] = useState('');


    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        fetch(url)
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

    const toggleModal = (title) => {
        show ? setShowModal(false) : setShowModal(true)
        props.onButtonClick(title)
    }

    const getComment = (url) => {
        setComment(GetComment(url, setComment))
    }


    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {

        return (

            <div>
                <Modal show={show} handleClose={() => toggleModal(0)} index={props.selected} >
                    <ReactMarkdown>{comment}</ReactMarkdown>
                </Modal>
                
                {response.map((child) => (
                    <div>
                        <Card toggle={toggleModal} comment={getComment} child={child}>
                            {child.data.title}
                        </Card>
                    </div>
                ))}
            </div>
        );
    }
}