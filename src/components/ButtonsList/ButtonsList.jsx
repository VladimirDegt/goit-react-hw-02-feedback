export function ButtonsList({handleClickBtnGood, handleClickBtnNeutral, handleClickBtnBad}){
  return (
    <ul>
      <button onClick={handleClickBtnGood}>Good</button>
      <button onClick={handleClickBtnNeutral}>Neutral</button>
      <button onClick={handleClickBtnBad}>Bad</button>
    </ul>
  )
};
