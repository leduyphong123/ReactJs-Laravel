

function Category({ children }) {
    return (
        <div className="bg-slate-100">
            {/* <div>a</div> */}
            <div className="flex justify-between items-start md:px-5 py-5">
                <div className="bg-white shadow-lg w-1/4 mt-4 rounded-lg px-4 py-4 hidden md:flex md:flex-col">
                    <p className="mb-3">Category</p>
                    <div className="ColorP hover:cursor-pointer mb-3">Shirt</div>
                    <div className="ColorP hover:cursor-pointer mb-3">Shirt</div>

                </div>
                <div className="w-full md:w-[73%] bg-white shadow-lg rounded-lg px-4 py-4 my-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Category;