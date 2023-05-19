export function ButtonsList({onLeaveFeedBack}){
  return (
    <ul onClick={onLeaveFeedBack}>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </ul>
  )
};
