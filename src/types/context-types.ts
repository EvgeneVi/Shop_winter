type stateType = {
  city: string;
};
type ctxType = {
  state: stateType;
  setState: React.SetStateAction<stateType>;
};

export type { stateType, ctxType };
