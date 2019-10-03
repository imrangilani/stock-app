<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <router-link to="/" class="navbar-brand">Stock Trader</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <router-link class="nav-link" to="/portfolio" activeClass="active" tag="li"><a>Portfolio</a></router-link>
                <router-link class="nav-link" to="/stocks" activeClass="active" tag="li"><a>Stocks</a></router-link>  
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" 
                        href="#" id="navbarDropdown" 
                        role="button" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false">
                    Save & Load
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</template>