export default function Card(props) {
    return (
        <a onClick={function () {
            props.toggle(props.child.data.title);
            props.comment('https://www.reddit.com' + props.child.data.permalink + '.json')
        }} href="#" className="block mx-auto p-6 bg-white m-6 border rounded-xl border-gray-200 hover:bg-gray-100 ">
            <p className="font-bold text-gray-900 "> {props.children} </p>
            <p>{props.child.data.total_awards_received}</p>
        </a>
    )
}

