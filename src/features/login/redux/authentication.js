import { useCallback } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { push } from 'connected-react-router';
import { LOGIN_ACTIONS } from './constants';
import { apiService } from '../../../common/apis/api-servicet';
import { take, map, mergeMap, switchMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { of } from 'rxjs';

export const doLoginRequest = ({ username, password }) => {
  return dispatch => {
    dispatch({
      type: LOGIN_ACTIONS.REQUEST,
    });

    const sendReq$ = fromFetch(
      'http://10.0.25.183:3000/api/xulyvipham/security/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
          code: '123456',
          hashCode: '123456',
        }),
      }
    );

    sendReq$.pipe(switchMap(res => res.json())).subscribe({
      error: err => {
        dispatch({ type: LOGIN_ACTIONS.ERROR });
      },
      next: value => {
        dispatch({ type: LOGIN_ACTIONS.SUCCESS, data: value });
      },
    });
    return sendReq$;
  };
};

export const authError = () => {
  return {
    type: LOGIN_ACTIONS.ERROR,
  };
};

export const useAuth = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, isPending, error } = useSelector(
    state => ({
      isAuthenticated: state.auth.isAuthenticated,
      isPending: state.auth.isPending,
      error: state.auth.error,
    }),
    shallowEqual
  );

  const authAction = useCallback(
    ({ username, password }) => {
      dispatch(doLoginRequest({ username, password }));
    },
    [dispatch]
  );

  const boundDismissLoginError = useCallback(() => {
    dispatch(authError());
  }, [dispatch]);

  return {
    isAuthenticated,
    isPending,
    error,
    doLogin: authAction,
    doLoginError: boundDismissLoginError,
  };
};

export function reducer(state, action) {
  switch (action.type) {
    case LOGIN_ACTIONS.REQUEST:
      return {
        ...state,
        isAuthenticated: false,
        isPending: true,
      };
    case LOGIN_ACTIONS.SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isPending: false,
        error: null,
      };
    case LOGIN_ACTIONS.FAILURE:
      return {
        ...state,
        isAuthenticated: false,
        error: action.data.error,
      };
    case LOGIN_ACTIONS.ERROR:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
