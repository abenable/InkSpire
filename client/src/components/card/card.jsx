import './card.scss';

const Card = () => {
  return (
    <>
      <div className='card'>
        <div className='card-header'>Blog Post Title</div>
        <div className='card-image'></div>
        <div className='card-content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
          lectus id massa tincidunt, eget auctor lorem dictum. Vivamus vel
          consectetur mi.
        </div>
        <a href='#' className='read-more'>
          Read More
        </a>
      </div>
    </>
  );
};

export default Card;
