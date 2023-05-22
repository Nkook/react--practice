import { people } from './data.js';
import { getImageUrl } from './utils.js';

function ListItems(list) {
    return (
        <>
            {list.map(person =>
            <li key={person.id}>
              <img
                src={getImageUrl(person)}
                alt={person.name}
              />
              <p>
                <b>{person.name}:</b>
                {' ' + person.profession + ' '}
                因{person.accomplishment}而闻名世界
              </p>
            </li>
          )};
        </>
    )
    
}
export default function List() {
    const chemists = people.filter(person =>
        person.profession === '化学家'
    );
    const everyoneElse = people.filter(person =>
        person.profession !== '化学家'
    );
    const listItemsEveryoneElse = ListItems(everyoneElse)
  const listItemsChemists = ListItems(chemists)
  return (
    <article>
      <h1>科学家</h1>
      <h2>化学家</h2>
      <ul>{listItemsChemists}</ul>
      <h2>其他科学家</h2>
      <ul>{listItemsEveryoneElse}</ul>
    </article>
  );
}

