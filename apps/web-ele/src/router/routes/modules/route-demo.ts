import type { RouteRecordRaw } from 'vue-router';

import { VBEN_LOGO_URL } from '@vben/constants';

const routes: RouteRecordRaw[] = [
  {
    // 路由配置项主要在对象路由的 meta 属性中
    meta: {
      badgeType: 'dot',
      badgeVariants: 'destructive',
      icon: VBEN_LOGO_URL,
      order: 9999,
      title: '报告单', // TODO:$t配置本地化支持
    },
    name: '报告单',
    path: '/report',
    // redirect: '/vben-admin/about', //如果没有特殊情况，父级路由的 redirect 属性，不需要指定，默认会指向第一个子路由。
    children: [
      {
        name: '报告单查询',
        path: '/report/repotrList',
        component: () => import('#/views/report/repotrList/index.vue'),
        meta: {
          badgeType: 'dot',
          badgeVariants: 'destructive',
          icon: 'lucide:copyright',
          title: '报告单查询',
        },
      },
    ],
  },
];

export default routes;
