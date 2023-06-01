import { Client, ClientConfig } from "pg";

const CONFIG_PG = Object.freeze<ClientConfig>({
  host: process.env.HOST,
  port: Number.parseInt(`${process.env.PORT}`),
  database: process.env.DATABASE,
  user: process.env.USER,
  password: process.env.PASSWORD,
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

  public async connect(): Promise<Client> {
    await this.client.connect();
    return this.client;
  }
}
export { Postgresql };
