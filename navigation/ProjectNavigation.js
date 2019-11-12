import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import ProjectsScreen from '../screens/ProjectsScreen';
import SingleProjectScreen from '../screens/SingleProjectScreen';

const ProjectNavigator = createStackNavigator({
  Projects: ProjectsScreen,
  SingleProject: SingleProjectScreen
});

export default createAppContainer(ProjectNavigator);
