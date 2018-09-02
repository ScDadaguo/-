<template>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Expand at sm</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample03" aria-controls="navbarsExample03" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample03">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link to="/home"><a class="nav-link" >Home <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
           <router-link to="/IntroductionToAthletes"><a class="nav-link" >IntroductionToAthletes <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/MedalRankings"><a class="nav-link" >MedalRankings <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/News"><a class="nav-link" >News <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/PhotoPage"><a class="nav-link" >PhotoPage <span class="sr-only">(current)</span></a></router-link>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
            <div class="dropdown-menu" aria-labelledby="dropdown03">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
        <form class="form-inline my-2 my-md-0">
          <input class="form-control" type="text" placeholder="Search">
        </form>
      </div>
    </nav>
</template>






<script>
export default {
  name: 'app-header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
