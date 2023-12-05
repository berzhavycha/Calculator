import React from "react";

interface IListItemProps {
  content: string;
  onItemClick: (expression: string) => void;
}

export const ListItem: React.FC<IListItemProps> = ({ content, onItemClick }) => {
  const handleItemClick = (): void => {
    onItemClick(content);
  };

  return (
    <li
      className="mb-2 p-1 pr-2 bg-white rounded-md shadow-md hover:bg-gray-100 text-xs cursor-pointer"
      onClick={handleItemClick}
    >
      <p className="text-blue-500 font-bold text-right">{content}</p>
    </li>
  );
};
