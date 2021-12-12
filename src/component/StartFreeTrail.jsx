import "../Navbar/module.css";
const StartFreeTrail = ({length}) => {
    console.log(length)
    return(
        <button style={{color:"white",border:"1px solid white" , background:"#002a22",padding:"10px",width:length}}>Start Free Trail</button>
    )
}
export default StartFreeTrail