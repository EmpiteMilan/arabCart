export interface ISlideCat {
    categories: Array<any>;
    onPressPaymentMethod: (index: number, item: any) => void;
    onSelectedTabIndex?: any;
    isModalVisible?: boolean;
  }
  