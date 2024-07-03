import background from"../../assets/contact.jpg"

const Contact = () => {
    return (
        <div>
            <div style={{backgroundImage:`url(${background})`, backgroundRepeat:"no-repeat", backgroundSize:"cover"}} className="bg-center">
                <div className="bg-black bg-opacity-50 px-4 md:px-36 py-36">
                <p className="text-2xl font-bold text-white font-sans">Contact Us</p>
                <h1 className="mt-2 font-bold font-sans text-2xl md:text-5xl text-white">Get Helps & Friendly Support</h1>
                </div>
            </div>
            <div className="my-12 px-4 md:px-24">
                <div className="bg-white p-6 rounded-md">
                    <p className="text-xl font-bold">Fillup The Form</p>
                    <form className="mt-8">
                        <div className="flex flex-col md:flex-row justify-between gap-4">
                        <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="" placeholder="Enter your name" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2 w-full">
                        <input type="text" className="grow" placeholder="Enter your email" />
                        </label>
                        </div>
                        <label className="input input-bordered flex items-center mt-4">
                        <input type="text" className="grow" placeholder="Subject" />
                        </label>
                        <textarea className="textarea textarea-primary mt-4 w-full h-24" placeholder="Your massage"></textarea>
                        <input type="submit" className="btn mt-4 px-6 text-lg font-bold text-white bg-green-500 hover:bg-green-700"/>
                    </form>

                </div>

            </div>
        </div>
    );
};

export default Contact;