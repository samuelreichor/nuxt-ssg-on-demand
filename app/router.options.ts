import type { RouterConfig } from '@nuxt/schema'

export default {
  routes: (_routes) => {
    const additionalRoutes = _routes.map(route => ({
      ...route,
      name: `${route.path}-ssg`,
      path: `/ssg${route.path}`,
      component: route.component
    }))
    
    return [
      ..._routes,
      ...additionalRoutes
    ]
  }
} satisfies RouterConfig
