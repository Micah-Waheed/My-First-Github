
document.getElementById("header").innerHTML +=`

<header id="header">

    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand d-flex" href="Home.html">
          <img src="Images/logo.png" alt="logo.img" width="100%">
        </a>
        <a href="Home.html" class="text-white fw-bolder fs-4 navbar-brand">Pleasure Tours</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style="color:#ffc107 ;"></span>
        </button>
        <div class="collapse navbar-collapse"  id="navbarSupportedContent">
          <ul class="navbar-nav  ms-auto mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="Home.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="About.html">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="FAQ.html">FAQ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Pricing.html">Pricing</a>
            </li>

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Categories
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="Categories-Hill Stations.html">Hill Stations</a></li>
                <li><a class="dropdown-item" href="Categories-Forts,Palaces.html">Fort & Palaces</a></li>
                <li><a class="dropdown-item" href="Categories-beach.html">Beaches</a></li>
                <li><a class="dropdown-item" href="Categories-Lakes & Rivers.html">Lakes & Rivers</a></li>
                <li><a class="dropdown-item" href="Categories-Historical Places.html">HistoricalPlaces<a><li>
                <li><a class="dropdown-item" href="Categories-Deserts.html">Deserts</a></li>
              </ul>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  </header>
`