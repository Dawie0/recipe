import { useState } from "react"
import Card from "./Card";
import axios from "axios"


const SearchForm = () => {
    const [page, setPage] = useState(1);
    const [response, setResponse] = useState(null);

    const getNews = async () => {
        try {
            const res = await axios.get("https://rapid-api-backends.vercel.app/api/news/", {
              params: { page },
            });
            const { data } = res;
            setResponse(data.data[0].screen_data.news);
        } 
        catch (error) {
            console.error(error);
        }
    }

    if (response === null) {
        getNews()
    }

    return (
        <div>
            <div className="row d-flex mt-4 justify-content-center">
                {response && 
                    response.map((news, index) => {
                        return(
                            <Card 
                            key={index}
                            news={news}
                            />
                        ) 
                    })}
            </div>
            <div className="row d-flex mt-4 justify-content-center">
                {response && 
                    <div className="col-6 d-flex mb-3 justify-content-center">
                        <button
                            className="btn"
                            onClick={() => {
                            setPage(page + 1);
                            getNews();
                        }}
                        >
                            Load next page &rarr;
                        </button>
                    </div>
                }
            </div>
        </div>
    )
}

export default SearchForm