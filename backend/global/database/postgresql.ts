import { Client, ClientConfig } from "pg";

const CONFIG_PG = Object.freeze<ClientConfig>({
  host: process.env.PG_HOST,
  port: Number.parseInt(`${process.env.PG_PORT}`),
  database: process.env.PG_DATABASE,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
});

class Postgresql {
  private static postgresql: Postgresql;
  private client!: Client;

  private constructor() {
    this.client = new Client(CONFIG_PG);
  }

  public static get_postgresql(): Postgresql {
    if (this.postgresql === undefined) this.postgresql = new Postgresql();
    return this.postgresql;
  }

  public async connect() {
    await this.client.connect();
  }
  public query(): Client {
    return this.client;
  }
}
export { Postgresql };
