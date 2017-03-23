import assignAll from 'lodash/fp/assignAll';

const initialState = {
  error: null,
  isPending: false,
  userProfile: {},
};

export default function profileReducer(state: Object = initialState, action: Object) {
  switch (action.type) {

    case 'PROFILE_REQUEST':
      return assignAll([
        state,
        {isPending: true},
      ]);

    case 'PROFILE_SUCCESS':
      return assignAll([
        state,
        {isPending: false, userProfile: action.payload},
      ]);

    case 'PROFILE_FAILURE': {
      const {response, message} = action;
      return assignAll([
        state,
        {
          isPending: false,
          error: {
            response,
            message,
          },
        },
      ]);
    }

    default:
      return state;

  }
}
