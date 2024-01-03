import { FC } from "react";

interface IListItemProps {
  content: string;
  onItemClick: (expression: string) => void;
}

export const ListItem: FC<IListItemProps> = ({ content, onItemClick }) => {
  const itemClickHandler = (): void => {
    onItemClick(content);
  };

  return (
    <li
      className="mb-2 p-1 pr-2 bg-white rounded-md shadow-md hover:bg-gray-100 text-xs cursor-pointer"
      onClick={itemClickHandler}
    >
      <p className="text-blue-500 font-bold text-right">{content}</p>
    </li>
  );
};
