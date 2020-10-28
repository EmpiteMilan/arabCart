export interface IRedeemCard {
  redeemCardArray: {
    id: number;
    name: string;
    status: string;
  };
  index: number;
  onPress?: (index: number) => void;
}
