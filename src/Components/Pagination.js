import React from "react";

const Pagination = ({ totalPost, postsPerpage, setCurrentpage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPost / postsPerpage); i++) {
    pages.push(i);
  }

  // console.log(pages)
  return (
    <div className="flex gap-10 justify-center mb-6 mt-2">
      {pages.map((page, index) => {
        return (
          <button key={index} onClick={() => setCurrentpage(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
