import {
  WEIGHT_UNIT_OPTIONS,
  PROCESSING_METHOD_OPTIONS,
} from "./test/util/enums.js";


export class coffeeData{
    constructor(WEIGHT_UNIT_OPTIONS, PROCESSING_METHOD_OPTIONS) {
        this.data = {
            WEIGHT_UNIT_OPTIONS,
            PROCESSING_METHOD_OPTIONS
        }
    }
}
export const fetchData = new coffeeData(WEIGHT_UNIT_OPTIONS, PROCESSING_METHOD_OPTIONS).data

export const processInput = (input, data) => {
  const parsedInput = JSON.parse(input);
  console.log(data);
  const coffee = {
    id: parsedInput.id,
    amount: parsedInput.weight.amount,
  };
  data.WEIGHT_UNIT_OPTIONS.map((option) => {
    if (parsedInput.weight.unit === option.value) {
      coffee.weight = option.label;
    }
  });
  data.PROCESSING_METHOD_OPTIONS.map((option) => {
    if (parsedInput.process === option.value) {
      coffee.process = option.label;
    }
  });
  console.log(coffee);
  localStorage.setItem(coffee.id, JSON.stringify(coffee))
};
