type Colors = {
  primary: string;
  secondary: string;
  ternary?: string;
  textColor: {
    primary: string;
    secondary: string;
    ternary?: string;
  };
};

export interface Palletes {
  light: Colors;
  dark?: Colors;
}
