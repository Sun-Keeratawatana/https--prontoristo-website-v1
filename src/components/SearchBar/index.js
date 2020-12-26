import React from "react";
import "../../components/SearchBar/search.css";
import axios from "axios";
import Loader from "../../images/loader.gif";
import PagesNavigation from "./PagesNavigation";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      results: {},
      loading: false,
      message: "",
      totalResults: 0,
      totalPages: 0,
      currentPageNo: 0,
    };
    this.cancel = "";
  }
  getPageCount = (total, denominator) => {
    const divisible = 0 === total % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(total / denominator) + valueToBeAdded;
  };

  fetchSearchResults = (updatedPageNo, query) => {
    const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : "";
    const searchUrl = `https://pixabay.com/api/?key=12413278-79b713c7e196c7a3defb5330e&q=${query}`;
    //const int_query = parseInt(query);
    //const searchUrl = 'http://127.0.0.1:8000/api/get_restaurant?format=json&id='+query;

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();
    axios
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        console.log(res.data)
        const total = res.data.total;
        const totalPagesCount = this.getPageCount(total, 20);
        const resultNotFoundMessage = !res.data.hits.length
          ? "There are no more search result. Please try a new search"
          : "";
        this.setState({
          results: res.data.hits,
          messages: resultNotFoundMessage,
          totalResults: total,
          totalPages: totalPagesCount,
          currentPageNo: updatedPageNo,
          loading: false,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          this.setState({
            loading: false,
            message: "Failed to fetch the data, Please Check the network",
          });
        }
      });
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    if (!query) {
      this.setState({
        query,
        results: {},
        message: "",
        totalPages: 0,
        totalResults: 0,
      });
    } else {
      this.setState({ query, loading: true, message: "" }, () => {
        this.fetchSearchResults(1, query);
      });
    }
  };
  handlePageClick = ( event ) => {
   
    // event.preventDefault();

		const updatePageNo = 'prev' === event
			? this.state.currentPageNo - 1
			: this.state.currentPageNo + 1;

		if( ! this.state.loading  ) {
			this.setState( { loading: true, message: '' }, () => {
				this.fetchSearchResults( updatePageNo, this.state.query );
			} );
		}
	};
  renderSearchResults = () => {
    const { results } = this.state;

    if (Object.keys(results).length && results.length) {
      return (
        <div className="results-container">
          {results.map((result) => {
            return (
              <a
                key={result.id}
                href={result.previewURL}
                className="result-item"
              >
                <h6 className="image-username">{result.name}</h6>
                <div className="image-wrapper">
                  <img
                    className="image"
                    src={result.previewURL}
                    alt={`${result.username} image`}
                  />
                </div>
              </a>
            );
          })}
        </div>
      );
    }
  };

  render() {
    const { query, loading, message, currentPageNo, totalPages } = this.state;
    // const query = this.state.query;
    const showPrevLink = 1 < currentPageNo;
    const showNextLink = totalPages > currentPageNo;
    // console.log(this.state);
    return (
      <div className="container">
        {/* Heading */}
        <h2 className="heading"> Restaurant Search</h2>
        {/* Search Input */}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value={query}
            id="search-input"
            name="query"
            placeholder="Search your restaurant.."
            onChange={this.handleOnInputChange}
          />
          <i class="fa fa-search" aria-hidden="true"></i>
        </label>
        {/* Error Message */}
        {message && <p className="message">{message}</p>}

        {/* loader */}
        <img
          src={Loader}
          className={`search-loading ${loading ? "show" : "hide"}`}
          alt="loader"
        />

        {/*Navigation*/}
        <PagesNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={() => this.handlePageClick('prev',this.state.event)}
          handleNextClick={() =>this.handlePageClick('next',this.state.event)}
        />

        {/* Result    */}
        {this.renderSearchResults()}

        {/*Navigation*/}
        <PagesNavigation
          loading={loading}
          showPrevLink={showPrevLink}
          showNextLink={showNextLink}
          handlePrevClick={() =>this.handlePageClick('prev',this.state.event)}
          handleNextClick={() =>this.handlePageClick('next',this.state.event)}
        />
      </div>
    );
  }
}
export default SearchBar;


