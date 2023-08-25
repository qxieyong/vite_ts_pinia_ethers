/*
 * @Author: xieyong 1239665882@qq.com
 * @Date: 2023-05-24 13:41:28
 * @LastEditors: xieyong 1239665882@qq.com
 * @LastEditTime: 2023-06-12 10:30:53
 * @FilePath: \ido\app\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import isMobile from '@/hooks/useIsMobile';

const pcRouters = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
];

const ydRouters = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/DataBoard',
    name: 'DataBoard',
    component: () => import('@/components/DataBoard.vue'),
  },
  {
    path: '/Airdrop',
    name: 'Airdrop',
    component: () => import('@/components/Airdrop.vue'),
  },
  {
    path: '/PreBurning',
    name: 'PreBurning',
    component: () => import('@/components/PreBurning.vue'),
  },
  {
    path: '/Burning',
    name: 'Burning',
    component: () => import('@/components/Burning.vue'),
  },
  {
    path: '/Board',
    name: 'Board',
    component: () => import('@/components/Board.vue'),
  },
  {
    path:'/Safe',
    name:'Safe',
    component: () => import('@/components/Safe.vue'),

  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  }
]


// @ts-ignore
const routes: Array<RouteRecordRaw> = !isMobile() ? pcRouters : ydRouters

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
