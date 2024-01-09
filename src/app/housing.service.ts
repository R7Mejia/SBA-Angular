
import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  readonly baseUrl = 'https://angular.io/assets/images/tutorials/faa';

  protected housingLocationList: HousingLocation[] = [
    {
      id: 0,
      name: 'Roatan',
      city: 'Roatan',
      state: 'Bay Islands',
      country: 'Honduras 🇭🇳',
      foto: '/assets/Roatan.png',
      funfacts:
        "Roatan is a Caribbean island located 65 kilometers off the northern coast of Honduras. It's the largest of Honduras's Bay Islands and is known for its white beaches, blue water, and jungle. Roatan is known for its snorkeling and diving, which take place on the Mesoamerican Reef, the world's second-largest barrier reef. Other destinations on Roatan include: Coxen Hole, West Bay, West End, Sandy Bay. Roatan has a busy social scene, but it's not as party-oriented as Utila. Some say the best months to visit are May and September when the weather is good and the island is less crowded.",
      airport: true,
    },
    {
      id: 1,
      name: 'Ciudad Pintoresca de Cantarranas',
      city: 'Cantarranas',
      state: 'FM',
      country: 'Honduras 🇭🇳',
      foto: '/assets/cantarranas.jpeg',
      funfacts: 'https://shorturl.at/wEQ16',
      airport: false,
    },
    {
      id: 2,
      name: 'Carnaval la Ceiba',
      city: 'La Ceiba',
      state: 'Atlantida',
      country: 'Honduras 🇭🇳',
      foto: '/assets/CarnavalLaCeiba.jpeg',
      funfacts:
        'La Ceiba is a Caribbean port city in northern Honduras. It is the gateway to the Bay Islands of Roatán, Útila and Guanaja. Part of a vast barrier reef, the islands have dive sites teeming with marine life such as whale sharks. South of La Ceiba, Pico Bonito National Park is rich in wildlife, including jaguars and toucans. To the west is the Cuero y Salado Wildlife Refuge, with mangroves and lagoons home to manatees.',
      airport: true,
    },
    {
      id: 3,
      name: 'Catedral de Comayagua',
      city: 'Comayagua',
      state: 'Comayagua',
      country: 'Honduras 🇭🇳',
      foto: '/assets/Comayagua.jpeg',
      funfacts: 'https://www.britannica.com/place/Comayagua',
      airport: true,
    },
    {
      id: 4,
      name: 'Ruinas Mayas de Copan',
      city: 'Copan Ruinas',
      state: 'Copan',
      country: 'Honduras 🇭🇳',
      foto: '/assets/Copan.jpeg',
      funfacts: 'https://whc.unesco.org/en/list/129/',
      airport: false,
    },
    {
      id: 5,
      name: 'Pulapanzak (Waterfall)',
      city: 'San Buenaventura',
      state: 'Cortes',
      country: 'Honduras 🇭🇳',
      foto: '/assets/PullaPanzak.jpeg',
      funfacts:
        "Pulhapanzak is considered one of the most beautiful waterfalls in Central America, surrounded by lush jungles and breathtaking landscapes. The waterfall has multiple tiers that drop 140 feet down, which is about 30 feet less than Niagara Falls. Some say the guided tour is worth the visit, but it's not for the faint of heart, especially the caves behind the falls.",
      airport: true,
    },
    {
      id: 6,
      name: 'Pueblitos "Macizos"',
      city: 'Sta. Lucia, Valle de Angeles y San Juancito',
      state: 'FM',
      country: 'Honduras 🇭🇳',
      foto: '/assets/Pueblitos.jpeg',
      funfacts:
        "Santa Lucía and Valle de Ángeles are both cities in Honduras. Santa Lucía is a mining town, and Valle de Ángeles is a Spanish mining town that has been restored to its original 16th-century appearance. Valle de Ángeles is located five miles east of Santa Lucía and is part of a circuit that also includes San Juancito and Tegucigalpa. Of course, the before paragraph doesn't do justice to these places, there's so much more to say and explore. Maybe you can find out by yourself...😉",
      airport: false,
    },
    {
      id: 7,
      name: 'Biosfera del Rio Platano',
      city: 'El Caribe',
      state: 'Cortes',
      country: 'Honduras 🇭🇳',
      foto: '/assets/RioPlatano.jpeg',
      funfacts:
        'The Río Plátano Biosphere Reserve is a protected area of 525,000 hectares (1.3 million acres) on the Caribbean coast of Honduras. The reserve was created in 1980 and expanded in 1997. In 1982, UNESCO designated it a World Heritage Site. In 2011, UNESCO placed it on the List of World Heritage in Danger to help promote its preservation. The reserve is home to a great diversity of life, with more than 30 terrestrial and marine ecosystems. These include swamps, mangroves, pine forests, savannas, tropical rainforests, and dwarf forests. The reserve also has important coastal and coral marine areas, and a variety of habitats, including extensive rainforests, pine savannas, mangroves, and keys. The reserve is also home to over 2,000 indigenous people who have preserved their traditional way of life. These ethnic groups in the country maintain agriculture and livestock in the area, being the main source of environmental sustenance. The reserve also has more than 69 archaeological sites that helped discover the White City.',
      airport: false,
    },
    {
      id: 8,
      name: 'Utila y Guanaja',
      city: 'Utila',
      state: 'Bay Islands',
      country: 'Honduras 🇭🇳',
      foto: '/assets/Utila.jpeg',
      funfacts: 'https://flyandsea.com/interesting-facts-about-utila-guanaja/',
      airport: false,
    },
    {
      id: 9,
      name: 'Lago de Yojoa',
      city: 'Yojoa',
      state: 'Cortes',
      country: 'Honduras 🇭🇳',
      foto: '/assets/Yojoa.jpeg',
      funfacts:
        'https://secretcentralamerica.com/trip-ideas/experience/yojoa-lake/',
      airport: false,
    },
  ];
  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find(
      (housingLocation) => housingLocation.id === id
    );
  }
}