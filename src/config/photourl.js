import { config } from "dotenv";
config();

export default{
  url: `${process.env.API_URL}`
}
