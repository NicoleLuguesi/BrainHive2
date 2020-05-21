import { CHANGE_FORM, SUBMIT_FORM} from '../actions/types.js';

export const changeForm = (field,value) => (dispatch) =>
{
  dispatch({
    type:CHANGE_FORM,
    payload:{
      field,
      value
    }
  });
};

export const submitForm = (data) => (dispatch) => {
  data.categories = data.categories.split(", ");
  dispatch({
    type:SUBMIT_FORM,
    payload:data,
  });
};