export interface ISlideCatDetail {
    category: {
      id: number;
      name: string;
      img:string;
    
    };
    onSelectedTabIndex?: any;
    index?: number;
    onPressPaymentMethod: (index: number, item: any) => void;
    isModalVisible?: boolean;
    isClickItem?: any;
  }
  