/* eslint react/prop-types: 0 */
import './card.css'

const Card = ( { news } ) => {
    return (
        <div className="col-xs-12 col-sm-4 col-md-3 m-2 card glass-morph">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-12 d-flex justify-content-center">
                    <img 
                        className='prop-image' 
                        src={news.related_image_big} 
                    />
                </div>
                <a 
                    className=" col-12 text-center d-flex justify-content-center align-items-center"
                    href={news.news_link ? news.news_link : news.third_party_url}>
                    <h3>{news.HEADLINE}</h3>
                </a>
                <div className="col-12 text-center">
                    <span>{news.news_provider_name}</span>
                </div>
            </div>

        </div>
    )
}

export default Card