import { Component } from "@angular/core";
import { accessToken } from "mapbox-gl";

@Component({
  selector: "app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  style = {
    sources: {
      world: {
        type: "geojson",
        data:
          "https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json"
      }
    },
    version: 8,
    layers: [
      {
        id: "countries",
        type: "fill",
        source: "world",
        layout: {},
        paint: {
          "fill-color": "#6F788A"
        }
      }
    ]
  };

  constructor() {
    /**
     * With mapbox-gl: ^1.1.0, It works.
     *
     * Now mapbox-gl 2.1.1, Error.
     */
    console.log(accessToken); // null
  }
}
