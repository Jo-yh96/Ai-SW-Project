import Gallery from "react-photo-gallery";
import { photos } from "./photo";
// import { ReactComponent as FeedIcon } from "./icon/feed.svg"


const Feed = () => {
    return(
        <div>
            {/* <p style={{textAlign:"center"}}>
                
                <h1>피드</h1>
            </p> */}
            <Gallery photos={photos} direction={"column"}/>
        </div>
        
    )
}

export default Feed;