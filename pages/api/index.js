import nc from "next-connect";
import { getAllHomeData } from "../../controller";

const handler = nc();
handler.get(getAllHomeData);
export default handler;
