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
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} content={String(item[contentKey])} onItemClick={handleItemClick} />
      ))}
    </ul>
  );
};
