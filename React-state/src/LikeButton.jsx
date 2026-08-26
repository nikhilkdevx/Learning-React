export default function LikeButton(){
    let clikced = () =>{
        console.log("clicked");
    }
    return(
        <div>
            <p onClick={clikced}><i class="fa-solid fa-heart"></i></p>
        </div>
    );
};