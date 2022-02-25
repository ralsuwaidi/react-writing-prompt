

export default function Modal(props) {
    const showHideClassName = props.show ? "block" : "hidden";

    return (
        <div className={showHideClassName}>
                <div className="overflow-y-scroll overscroll-contain w-screen fixed h-screen dark:bg-gray-700 bg-white right-0 left-0 top-4 z-50 justify-center items-center md:inset-0">
                    <div className="relative max-w-3xl mx-auto" >

                        <div className="flex justify-between items-start p-5 rounded-t ">
                            <h3 className="text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white">
                                {props.index}
                            </h3>
                            <button type="button" onClick={() => props.handleClose()} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="prose text-base leading-relaxed  text-gray-500 dark:text-gray-400">
                                {props.children}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}