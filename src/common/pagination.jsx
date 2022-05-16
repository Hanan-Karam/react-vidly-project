import PropTypes from 'prop-types';
import _ from 'lodash';//js library/ optimized version of underscore 
// npm install lodash@4.17.10


const Pagination = (props) => {
    const {moviesCount, pageSize, currentPage, onClick} = props;
    //const pagesCount = moviesCount / pageSize;
    const pagesCount = Math.ceil(moviesCount / pageSize);
   // console.log(pagesCount); //0.9=> we need to ceil it 
   console.log(currentPage);
    if(pagesCount === 1) return null;
    //we need to create an array that has all the pages we need to display
    //using lodash to create pages range
    const pages = _.range(1, pagesCount +1);//+1 as it doesn't include the pagesCount in the array
    return (  
        <ul className="pagination">
            {pages.map(page =>(
                <li 
                key={page}
                className={page === currentPage ? "page-item active" : "page-item"}><a className="page-link"  
                onClick={() => onClick(page)}
                >{page}</a></li>
            ))
            }
        </ul>
    );
};

//proptypes library => to check on types
Pagination.propTypes ={
    moviesCount : PropTypes.number.isRequired,
    pageSize : PropTypes.number.isRequired, 
    currentPage: PropTypes.number.isRequired, 
    onClick : PropTypes.func   
};
export default Pagination;
