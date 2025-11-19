import img from '../assets/img1.jpg'
const Boolean = () => {
    const nobita = {
        homeworkDone: true,
        city: "Tokyo",
        note: null
    }
  return (
    <>
       <div className="mainboolean">
          <h2>Nobita's Status</h2>
          <div className="booleaninfo">
            <h3>City: {nobita.city}</h3>
            <h3>Note: {nobita.note ?? "No note"}</h3>
            {nobita.homeworkDone ? (
                <div className="homeworkdone">
                    <img src={img} alt="happy" />
                    <h3>Homework Complete </h3>
                </div>
            ) : (
                <h3>Homework not done </h3>
            )}
          </div>
       </div>
    </>
  )
}

export default Boolean