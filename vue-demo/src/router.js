import Vue from "vue";
import Router from "vue-router";
import Index from "./Index.vue";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      component: Index,
      /* redirect: {
        name: 'home'
      } */
      children: [
        {
          path: "/opp",
          name: "opp",
          component: () => import("./views/private/child1/Child.vue")
        }
      ]
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/private/Home.vue"),
      /* redirect: {
        name: "child1"
      }, */
      children: [
        /* { 
          path: '', 
          component: () => import("./views/private/Home.vue")
        }, */
        {
          path: "child1",
          name: "child1",
          component: () => import("./views/private/child1/Child.vue")
        },
        {
          path: "child2/:id",
          name: "child2",
          component: () => import("./views/private/child2/Child.vue"),
          props: true,
          children: [
            {
              path: "todo/:name",
              name: "todo",
              component: () => import("./views/private/child2/Todo.vue")
            }
          ]
        },
        {
          path: "child3",
          name: "child3",
          component: () => import("./views/private/child3/Child.vue"),
          children: [
            {
              path: "child33",
              name: "child33",
              component: () => import("./views/private/child3/Child33.vue"),
              components: {
                default: () => import("./views/private/child3/Child33.vue"),
                a: () => import("./views/private/child3/Child34.vue"),
                b: () => import("./views/private/child3/Child35.vue")
              }
            }
          ]
        }
      ]
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/public/About.vue")
    },
    {
      path: "/404",
      name: "404",
      component: () => import("./404.vue")
    },
    {
      path: "*",
      name: "noPermission",
      component: () => import("./noPermission.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})

router.afterEach((to, from, next) => {
  console.log(to)
  console.log(from)
})

export default router;