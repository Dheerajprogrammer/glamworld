import { Injectable } from '@angular/core';

@Injectable()
export class Markup {
    Header = `<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand text-white" [routerLink]="['/']">Glam World's Entertainment</a>
    <button class="navbar-toggler collapsed" type="button"
    data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-collapse collapse" id="navbarColor01" style="">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/']">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/explore']">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/events']">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" [routerLink]="['/contact']">Contacts</a>
        </li>
      </ul>
    </div>
  </nav>`;

  Footer = `<footer class="page-footer font-small blue pt-4">
  <div class="container-fluid text-md-left">
    <div class="row">
      <div class="col-md-6 mt-md-0 mt-3">
        <h5 class="text-uppercase">About Us</h5>
        <p>Here you can use rows and columns here to organize your footer content.</p>
      </div>
      <hr class="clearfix w-100 d-md-none pb-3">
      <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-md-0 mb-3">
          <h5 class="text-uppercase">Links</h5>
          <ul class="list-unstyled">
            <li>
              <a href="#!">Link 1</a>
            </li>
            <li>
              <a href="#!">Link 2</a>
            </li>
            <li>
              <a href="#!">Link 3</a>
            </li>
            <li>
              <a href="#!">Link 4</a>
            </li>
          </ul>
        </div>
    </div>
  </div>
  <div class="footer-copyright text-center py-3">&copy; 2019 Copyright:
    <a href="#">Glam World's Entertainment</a>
  </div>
</footer>`;
}
