import React, { useEffect } from 'react';
import { IonApp } from '@ionic/react';
import { Capacitor } from '@capacitor/core';
import { FirebaseAnalytics } from '@capacitor-community/firebase-analytics';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {

  useEffect(() => {
    const init = async () => {
      if (Capacitor.getPlatform() === 'web') {
        FirebaseAnalytics.initializeFirebase({
          apiKey: "AIzaSyDTM6WF5rt31iFFKZByi0AWc9Y7VJel9Dc",
          authDomain: "capacitor-c1731.firebaseapp.com",
          databaseURL: "https://capacitor-c1731.firebaseio.com",
          projectId: "capacitor-c1731",
          storageBucket: "capacitor-c1731.appspot.com",
          messagingSenderId: "1041364361004",
          appId: "1:1041364361004:web:0b2e129cb492aba4e95689",
          measurementId: "G-JN8DWH71XQ"
        });
      }
    }

    init();
  }, []);

  const setUserId = () => {
    FirebaseAnalytics.setUserId({
      userId: 'john_doe_123',
    });
  };

  const setUserProperty = () => {
    FirebaseAnalytics.setUserProperty({
      name: "favorite_food",
      value: "pizza",
    });
  };

  const getAppInstanceId = async () => {
    const response = await FirebaseAnalytics.getAppInstanceId();

    const { instanceId } = response;
    alert('Instance ID: ' + instanceId);
  };

  const setScreenName = async () => {
    await FirebaseAnalytics.setScreenName({ screenName: 'test' });
  };

  const logEvent = async () => {
    FirebaseAnalytics.logEvent({
      name: "select_content",
      params: {
        content_type: "image",
        content_id: "P12453",
        items: [{ name: "Kittens" }],
      },
    });
  };

  return (
    <IonApp>
      <>
        <button onClick={setUserId} style={button}>Set User ID</button>
        <button onClick={setUserProperty} style={button}>Set User Property</button>
        <button onClick={getAppInstanceId} style={button}>Get App Instance Id</button>
        <button onClick={logEvent} style={button}>Log Event</button>
        <button onClick={setScreenName} style={button}>Set Screen</button>
      </>
      {/* <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} exact={true} />
          <Route exact path="/" render={() => <Redirect to="/home" />} />
        </IonRouterOutlet>
      </IonReactRouter> */}
    </IonApp>
  )
};

const button = {
  padding: '16px',
  fontSize: 20
};

export default App;
