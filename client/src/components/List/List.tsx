import { ListItem } from "@components";

interface IListProps<T, K extends keyof T> {
  items: T[];
  contentKey: K;
  onItemClick: (content: string) => void;
}

export const List = <T, K extends keyof T>({ items, contentKey, onItemClick }: IListProps<T, K>): JSX.Element => {
  const handleItemClick = (content: string): void => {
    onItemClick(content);
  };

  return (
    <div className="bg-gray-100 mb-6 p-2 pb-0.5 rounded-md shadow-md">
      <ul>
        {items.map((item, index) => (
          <ListItem key={index} content={String(item[contentKey])} onItemClick={handleItemClick} />
        ))}
      </ul>
    </div>
  );
};
