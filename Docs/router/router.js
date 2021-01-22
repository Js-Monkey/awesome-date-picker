import Main from '../components/main/index.vue'
import Content from '../components/content'
import defaultViews from './default'
const viewFiles = require.context('../view', true)


const views = viewFiles.keys().reduce((views, path) => {
    const value = viewFiles(path).default
    const isNotErrorPage = ['404','500'].indexOf(value.name) === -1
    const isNotCompass = !/start|install/g.test(value.__file)
    if (isNotErrorPage&&isNotCompass) {
        let name = value.__file.match(/view\/(\S*)\/index/)[1]
        views.push({
            path: '/picker/' + name,
            meta:{
              type:'component'
            },
            name,
            component: () => import(`../view/${name}/index.md`)
        })
    }
    return views
},defaultViews)

export default [
    {
        path: '/',
        name: 'home',
        component: Main,
        meta: {
            notCache: true
        },
        children: []
    },
    {
        path: '/picker',
        name: 'components',
        component: Content,
        redirect: '/picker/install',
        children: views
    },
    {
        path: '/500',
        name: 'error_500',
        meta: {
            hideInMenu: true
        },
        component: () => import('../view/error-page/500.vue')
    },
    {
        path: '*',
        name: 'error_404',
        meta: {
            hideInMenu: true
        },
        component: () => import('../view/error-page/404.vue')
    }
]
