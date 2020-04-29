import { RouteComponentProps } from 'react-router-dom';
import { User } from '../../graphql';

export interface UserProps<T> {
  user: User,
  routeProps: RouteComponentProps<T>
}
