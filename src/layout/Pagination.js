import React, { useContext } from "react";
import GamesContext from "../context/GamesContext";
import ReactPaginate from "react-paginate";

export default function Pagination() {
	const { pageCount, handlePageClick, currentPage } =
		useContext(GamesContext);

	return (
		<div className="flex flex-col justify-center pt-8 pb-4 pl-8 pr-8 mx-auto">
			<ReactPaginate
				containerClassName="btn-group"
				breakLinkClassName="btn"
				pageLinkClassName="btn"
				activeLinkClassName="btn-primary"
				previousLinkClassName="btn"
				nextLinkClassName="btn"
				//
				breakLabel="..."
				nextLabel=" > "
				previousLabel=" < "
				//
				forcePage={currentPage}
				onPageChange={handlePageClick}
				pageRangeDisplayed={2}
				marginPagesDisplayed={0}
				pageCount={pageCount}
				renderOnZeroPageCount={null}
			/>
		</div>
	);
}
