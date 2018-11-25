 const createProject = (project) => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
      // make async call to database
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorId = getState().firebase.auth.uid;

      firestore.collection('projects').add({
        ...project,
        autherFirstName: profile.firstName,
        autherLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      }).then(() => {
        dispatch({ type: 'CREATE_PROJECT_SUCCESS', project });
      }).catch(err => {
        dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
      });
    }
  };

  export default createProject