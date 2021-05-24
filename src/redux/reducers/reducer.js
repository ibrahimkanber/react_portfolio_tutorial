import { ADD_FAVORİTES, REMOVE_FAVORİTES } from "../actionTypes/actionTypes";

export const addfavReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORİTES:
      // const favArray = [...state]
      // favArray.push(action.payload)
      if (state.includes(action.payload.id)) {
        const filtered = state.filter(
          (movieId) => movieId !== action.payload.id
        );
        return filtered;
      } else {
        return [...state, action.payload.id];
      }

    case REMOVE_FAVORİTES:
    //   if (state.includes(action.payload)) {
    //     const i = state.indexOf(action.payload);
    //     console.log(state);
    //     const res = state.splice(i, 1);
    //     console.log(res)
    //     return res}
    const filter = state.filter(id=>id!==action.payload)
    return filter

    default:
      return state;
  }
};
