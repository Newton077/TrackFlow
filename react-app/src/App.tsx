import { Routing } from 'pages';
import { withProviders } from 'hocs';

function Component() {
  return (<Routing />);
}

export const App = withProviders(Component);
