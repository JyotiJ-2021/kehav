import nc from "next-connect";
import { getListing } from "../../../controller";

const handler = nc();
handler.get(getListing);
export default handler;
