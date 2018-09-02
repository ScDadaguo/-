import Home from './components/HOME/HOME.vue'
import IntroductionToAthletes from './components/IntroductionToAthletes/IntroductionToAthletes.vue'
import MedalRankings from './components/MedalRankings/MedalRankings.vue'

import News from './components/News/News.vue'

import PhotoPage from './components/PhotoPage/PhotoPage.vue'

export const routes = [

    {path:'/home',name:"HOME",component:Home},
    {path:'/IntroductionToAthletes',name:"IntroductionToAthletes",component:IntroductionToAthletes},
    {path:'/MedalRankings',name:"MedalRankings",component:MedalRankings},
    {path:'/News',name:"News",component:News},
    {path:'/PhotoPage',name:"PhotoPage",component:PhotoPage},

  ]