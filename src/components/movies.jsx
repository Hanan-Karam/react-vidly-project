import React, { Component } from 'react';
import {getMovies} from '../services/fakeMovieService' ;
import {getGenres} from '../services/fakeGenreService' ;
import Filter from '../common/filter';
import Pagination from '../common/pagination';
import {paginate} from '../utils/paginate';
import _ from 'lodash';
import MoviesTable from './moviesTable';

class Movies extends Component {
    state = { 
        movies : [],
        genres : [],
        pageSize: 4,
        currentPage :1,
        sortColumns : {column: "title", order : "asc" }
     };
     componentDidMount(){
         const genres = [{_id: '',name: 'All Genres'},...getGenres()]
         this.setState({movies : getMovies(), genres})
     }

     handleDelete = (movie)=>{
       // console.log(movie);
       //create another array that has all the movies except the clicked one
       const movies = this.state.movies.filter(m=> m._id !== movie._id);
       //setting the movies property in the handleDelete method to the movies object in the state property
       this.setState({movies : movies});
       //when the property and object have the same name, we remove repetition
       //this.setState({movies});
     };
     handleLike=(movie)=>{
        // console.log(movie);
        const movies = [...this.state.movies];
        const index = movies.indexOf(movie);
        movies[index] = {...movies[index]};
        movies[index].liked = !movies[index].liked;
        this.setState({movies});
     };
     handlePagination =(page) =>{
        //console.log(page);
        this.setState({currentPage : page});
     };
     handleFilter = (genre) => {
        this.setState({selectedGenre : genre, currentPage:1});
     };
     handleSorting =(sortColumns)=>{
        this.setState({sortColumns});
     }

    render() { 
        //display=> filter=> sort=> paginate
        //coditional Rendering
        const {length : moviesCount} = this.state.movies;
        const {pageSize, currentPage, sortColumns,selectedGenre, movies : allMovies} = this.state
        //filter
        const filtered = selectedGenre && selectedGenre._id ? allMovies.filter(m => m.genre._id === selectedGenre._id) : allMovies;
        //sort
        const sorted = _.orderBy(filtered, [sortColumns.column],[sortColumns.order]);
        //paginate
        //creating the paginate function in another file and call it 
        //const movies = paginate(allMovies,currentPage, pageSize);
        const movies = paginate(sorted,currentPage, pageSize);
        if(moviesCount === 0)
        return <h3 className={"m-2 text-danger  fw-bold  p-3"}>Your List is Empty</h3>
        return (
            <div className ="row">
                <div className="col-4">
                    <Filter 
                    genresNames = {this.state.genres}
                    onFilter = {this.handleFilter}
                    selectedGenre = {this.state.selectedGenre}
                    />
                </div>
                <div className="col-8">
                {/* <h3 className={"m-2 text-success  fw-bold  p-3"}>Your List has  {moviesCount} movies</h3> */}
                <h3 className={"m-2 text-success  fw-bold  p-3"}>Your List has  {filtered.length} movies</h3>
                <MoviesTable
                movies = {movies}
                sortColumns ={sortColumns}
                onLike ={this.handleLike}
                onDelete = {this.handleDelete}
                onSort = {this.handleSorting}
                />
                <Pagination
                //moviesCount ={moviesCount}
                moviesCount ={filtered.length}
                pageSize ={pageSize}
                currentPage={currentPage}
                onClick ={this.handlePagination}
                />
                </div>
            </div>
        );
    }
}
 
export default Movies;