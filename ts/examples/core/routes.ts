import Layout from './Layout';
import NotFoundView from './NotFoundView';
import TrackingExample from '../tracking/TrackingExample';
import MobileNavExample from '../mobilenav/MobileNavExample';
import MobileNav from 'lib/components/MobileNav'
import Markdown from 'examples/markdown/Markdown'
import FormController from 'examples/form/FormController'

export const routes = [
      { path: '/',  component: Layout,  childRoutes: [
        { path: 'tracking-example', component: TrackingExample }, 
        { path: 'markdown', component: Markdown }, 
        { path: 'mobile-nav', component: MobileNavExample },
        { path: 'form', component: FormController }  
      ]},
      { path: '*', component: NotFoundView } 
]