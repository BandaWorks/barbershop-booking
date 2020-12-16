// eslint-disable-next-line import/no-extraneous-dependencies
import { Server } from "miragejs";

import { barbers } from "./barbers";
import { services } from "./services";

// eslint-disable-next-line no-new
new Server({
  routes() {
    this.namespace = "api";

    /*
     * Delay before server sends the response.
     * Adjust this to test how your apps behaves
     * in slow connection mode
     */
    this.timing = 1500;

    this.get("/barbers/", () => barbers);
    this.get("/services/", () => services);
  },
});
