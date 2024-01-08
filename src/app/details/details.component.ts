
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <img
        class= "listing-photo"
        [src]= "housingLocation?.foto"
        alt="Exterior photo of {{ housingLocation?.name }}"
      />
      <section class="listing-description">
        <h2 class="listing-heading"> {{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.country }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <p>
          Explore More:
          <a [href]= "housingLocation?.funfacts">{{
            housingLocation?.funfacts
          }}</a>
        </p>
        <span
          >Does this location have an airport? 🛬:
          {{ housingLocation?.airport }}</span
        >
      </section>
      
    </article>
  `,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(HousingService);
  housingLocation: HousingLocation | undefined;
  
  constructor() {
    const housingLocationId = parseInt(this.route.snapshot.params['id'], 10);
    this.housingService
      .getHousingLocationById(housingLocationId)
      .then((housingLocation) => {
        this.housingLocation = housingLocation;
      });
  }

}