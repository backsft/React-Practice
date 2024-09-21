import seriesData from "../api/seriesData.json";

export const Animals = () => {
  return (
    <ul>
      {seriesData.map((curElem) => {
        return (
          <li key={curElem.id}>
            <div>
              <img src={curElem.imageLocation} width="40%" height="40%" alt={curElem.perName} />
            </div>
            <h2>Looks: {curElem.looks}</h2>
            <h3>Rating: {curElem.rating}</h3>
            <p>Description: {curElem.description}</p>
            <p>Pet Name: {curElem.perName}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Animals;
