import { NavigationAction } from 'react-navigation'

let nav;

function setTopLevelNavigatior(navigatorRef){
    nav = navigatorRef;
}

function navigate(routeName, params){
    nav.dispatch(NavigationAction.navigate({ routeName, params }))
}

export default {
    setTopLevelNavigatior,
    navigate
}