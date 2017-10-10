export default [
  {
    path: '/',
    name: 'Index',
    component: (resolve) => require(['./views/Index.vue'], resolve)
  },{
    path: '/chapter-one',
    name: 'ChapterOne',
    component: (resolve) => require(['./views/ChapterOne.vue'], resolve),
    children: [
      {
        path: 'hello-world',
        name: 'HelloWorld',
        component: (resolve) => require(['./components/chapter-one/HelloWorld.vue'], resolve),
      }, {
        path: 'guess-letter',
        name: 'GuessLetter',
        component: (resolve) => require(['./components/chapter-one/GuessLetter.vue'], resolve),
      }
    ]
  },{
    path: '/chapter-two',
    name: 'ChapterTwo',
    component: (resolve) => require(['./views/ChapterTwo.vue'], resolve),
    children: [
      {
        path: 'draw-in-canvas',
        name: 'DrawInCanvas',
        component: (resolve) => require(['./components/chapter-two/DrawInCanvas.vue'], resolve),
      }, {
        path: 'rectangle',
        name: 'Rectangle',
        component: (resolve) => require(['./components/chapter-two/Rectangle.vue'], resolve),
      }
    ]
  },{
    path: '/chapter-three',
    name: 'ChapterThree',
    component: (resolve) => require(['./views/ChapterThree.vue'], resolve),
    children: [
      {
        path: 'text-arranger',
        name: 'TextArranger',
        component: (resolve) => require(['./components/chapter-three/TextArranger.vue'], resolve),
      }
    ]
  },{
    path: '/chapter-four',
    name: 'ChapterFour',
    component: (resolve) => require(['./views/ChapterFour.vue'], resolve),
    children: [
      {
        path: 'space-ship',
        name: 'SpaceShip',
        component: (resolve) => require(['./components/chapter-four/SpaceShip.vue'], resolve),
      }
    ]
  },{
    path: '*',
    redirect: '/'
  }
]
