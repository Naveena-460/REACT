import imag from '../assets/nobi.jpg'
import shiimag from '../assets/shi.jpg'
import suneimag from '../assets/sune.jpg'
import gianimag from '../assets/gian.jpg'
import dekiimag from '../assets/deki.jpg'
import doraimag from '../assets/dorami.jpg'
const Cards = () => {
    const Friends = [
        {name:"Nobita", img:imag, detail:"Always sleepy", isActive:true},
        {name:"Shizuka", img:shiimag, detail:"Loves bathing", isActive:true},
        {name:"Suneo", img:suneimag, detail:"Rich kid", isActive:true},
        {name:"Gian", img:gianimag, detail:"Loves singing", isActive:false},
        {name:"Dekisugi", img:dekiimag, detail:"Class topper", isActive:true},
        {name:"Dorami", img:doraimag, detail:"Doraemon's sister", isActive:false}
    ]
  return (
    <>
    <h2>Characters of Doraemon</h2>
       <div className="maincard">
          {Friends.map((e,i)=>(
            <div className="childcard" key={i}>
            <div className="cardimg">
               <img src={e.img} alt="cardimg" />
            </div>
            <div className="cardinfo">
                  <h3>Name: {e.name}</h3>
                  <h3>Detail: {e.detail}</h3>
                  <h3>Status: {e.isActive ? "Active" : "Inactive"}</h3>
            </div>
            </div>
          ))}
       </div>
    </>
  )
}

export default Cards