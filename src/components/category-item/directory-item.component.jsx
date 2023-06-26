import './directory-item.style.scss';
import { useNavigate } from 'react-router-dom';

const DirectoryItem = (props) => {
    const { id, imageUrl, title, route} = props.category;

    const navigate = useNavigate();

    return (
        <div className='directory-container' key={id} onClick={() => navigate(route)}>
              <div className='background-image' style=
              {{
                backgroundImage: `url(${imageUrl})`
              }}
              ></div>
              <div className='directory-body-container'>
                <h2>{title}</h2>
                <p>Shop Now</p>
              </div>
            </div>
    )
}

export default DirectoryItem;