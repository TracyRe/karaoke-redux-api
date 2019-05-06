const middlewareLogger = store => next => action => {
  console.log('Orignal State: ' , store.getState());
  console.log('Current State: ', action);
  next(action);
  console.log('New Updated State: ', store.getState());
};

export default middlewareLogger;
