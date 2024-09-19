import React from "react";

function Filter({
  activeTag,
  handleTag,
  tagList,
}: {
  activeTag?: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}) {
  return (
    <>
      {tagList.map((tag, i) => (
        <li onClick={() => handleTag(tag)} key={i}>
          {tag}
        </li>
      ))}
    </>
  );
}

export default Filter;
