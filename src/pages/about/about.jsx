import "./about.css"

export default function About(){
    return(
        <div className="body">
            <p>material design 3 is the latest edition of material UI implementation from google</p>
            <div className="carousel">
                <img src="https://wallpapers.com/images/featured/aesthetic-pictures-hv6f88paqtseqh92.jpg" alt="1" className="img1" />
                <img src="https://img.freepik.com/free-photo/pink-sky-background-with-crescent-moon_53876-129048.jpg" alt="2" className="img2" />
                <img src="https://png.pngtree.com/thumb_back/fh260/background/20211219/pngtree-cute-pastel-background-aesthetic-image_928060.jpg" alt="3" className="img3"/>
            </div>
            <p>it follows the concept of "design follows functionality"</p>
        </div>
    )
}