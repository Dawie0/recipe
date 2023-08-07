



const SearchForm = () => {
    return (
        <div className="row d-flex mt-4 justify-content-center">
            <div className="row justify-content-center">
                <div className="col-8 mb-3">
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Search recipes" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    <label htmlFor="diet">Diet</label>
                    <select className="form-select" id="diet" aria-label="Default select example">
                        <option defaultValue="none">none</option>
                        <option value="pescetarian">pescetarian</option>
                        <option value="lacto vegetarian">lacto vegetarian</option>
                        <option value="ovo vegetarian">ovo vegetarian</option>
                        <option value="vegan">vegan</option>
                        <option value="vegetarian">vegetarian</option>
                    </select>
                </div>
                <div className="col-4">
                    <label htmlFor="exclude-ingredients">Exclude Ingredients</label>
                    <input type="text" id="exclude-ingredients" className="form-control" placeholder="ex: Cilantro" aria-label="exclude ingredient" />
                </div>
                <div className='col-8 d-flex m-3 justify-content-center'>
                    <button className='btn' 
                        // onClick={(e) => {
                        // e.preventDefault()
                        // e.stopPropagation()
                        // getProperties()}}
                        >
                        {/* {loading ? <>Loading...</> : <>Search</>} */}
                        Search
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SearchForm