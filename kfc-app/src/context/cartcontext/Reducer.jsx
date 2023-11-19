export const reducer = (state, action) => {
  localStorage.setItem("statekfc", JSON.stringify(state));

  switch (action.type) {
    case "ADD_TO_CART": {
      localStorage.setItem("statekfc", JSON.stringify(state));
      return [...state, action.payload];
    }

    case "REMOVE_FROM_CART": {
      const df = state.filter((item) => item.id !== action.payload);
      localStorage.setItem("statekfc", JSON.stringify(df));

      return df;
    }
    case "REMOVE_ALL": {
      localStorage.setItem("statekfc", JSON.stringify([]));

      return [];
    }
    case "INCREMENT": {
      const df = state.map((ele) => {
        if (ele.id === action.payload) {
          return { ...ele, quantity: ele.quantity + 1 };
        }
        return ele;
      });
      localStorage.setItem("statekfc", JSON.stringify(df));

      return df;
    }
    case "DECREMENT": {
      const df = state.map((ele) => {
        if (ele.id === action.payload) {
          return { ...ele, quantity: ele.quantity - 1 };
        }
        return ele;
      });
      localStorage.setItem("statekfc", JSON.stringify(df));

      return df;
    }

    case "CHECKOUT": {
      return [];
    }
    default: {
      return state;
    }
  }
};
