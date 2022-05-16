import _ from 'lodash'; 
export function paginate(movies, pageNumber, pageSize){
    const startIndex = (pageNumber -1) * pageSize;
    //convert movies to a lodash object(wrapper) so we can use lodash methods, return an array
    return _(movies).slice(startIndex).take(pageSize).value(); 
}