import Rectotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import ReactotronSaga from 'reactotron-redux-saga';

// caso não apareça nada - executar o comando adb reverse tcp:9090 tcp:9090 para redirecionar as portas
if(__DEV__){
    const tron = Rectotron
    .configure({ host: '192.168.0.107' })
    .useReactNative()
    .use(reactotronRedux())
    .use(ReactotronSaga())
    .connect();
    
    // limpa toda a time line do Reactotron 
    tron.clear();
    console.tron = tron;
}