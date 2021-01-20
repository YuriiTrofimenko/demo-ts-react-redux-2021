import React from 'react'
import {Link, NavLink, Route} from 'react-router-dom'
import {WithStyles, withStyles} from '@material-ui/styles'
import RouteModel from '../../models/RouteModel'

// наследование интерфейса, типизирующего props,
// для добавления свойства classes,
// типизированного типом, выведенным автоматически из стилей styles
interface IProps extends WithStyles<typeof styles> {
    routes: RouteModel[]
}

interface IState {
}

// ts-объект стилей для компонента Navbar
const styles = () => ({
    links: {
        listStyleType: 'none',
        margin: '0',
        padding: '0',
        overflow: 'hidden',
        backgroundColor: '#333',
        position: 'sticky' as 'sticky',
        top: '0',
    },
    link: {
        float: 'left' as 'left',
        '& a': {
            display: 'block',
            color: 'white',
            textAlign: 'center',
            padding: '14px 16px',
            textDecoration: 'none',
        },
        '& a:hover': {
            backgroundColor: '#111'
        },
        '& .active': {
            backgroundColor: '#4CAF50'
        },
    },
})

class Navbar extends React.Component<IProps, IState> {
    /* constructor(props: IProps | Readonly<IProps>) {
        super(props)
    } */
  render() {
      const routes = this.props.routes
      // получение свойства, содержащего словарь стилей,
      // внедренный через props компонентом-оберткой
      const { classes } = this.props
      return (
          <ul className={classes.links}>
              {
                  routes.map(
                      routeModel =>
                          <li className={classes.link}>
                              <NavLink
                                  to={routeModel.path}
                                  exact
                              >
                                  {routeModel.name}
                              </NavLink>
                          </li>
                  )
              }
          </ul>
      )
  }
}
// создание экземпляра компонента-обертки,
// передающего стили компоненту Navbar через props
export default withStyles(styles)(Navbar)
