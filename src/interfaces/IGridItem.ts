export interface IGridItem {
  title: string;
  properties: {
    content: {
      name: string;
      value: string;
    };
    columns: {
      name: string;
      value: string;
    };
    columnWidth: {
      name: string;
      value: string;
    };
    gap: {
      name: string;
      value: string;
    };
  };
  image: string;
}
