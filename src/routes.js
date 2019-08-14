import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';
import Box from './pages/Box';

const Routes = createAppContainer (
    //No RC, em todas as rotas vou precisar ter createAppContainer
    createStackNavigator({
    //Tipo de navigation que estou utilizando
        Main,
        Box,
    })
);

export default Routes;