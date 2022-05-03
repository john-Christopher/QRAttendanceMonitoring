import React, {useState, useEffect} from 'react';

import firestore from '@react-native-firebase/firestore';

function ProfileFetch(activeEmail) {
  useEffect(() => {
    const subscriber = firestore()
      .collection('profile')
      .where("email", "==", activeEmail)
      .onSnapshot(() => {
        const profile = [];

        querySnapshot.forEach(documentSnapshot => {
          profile.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        set
      })
    return () => subscriber();
  }, []);
}

export default ProfileFetch;