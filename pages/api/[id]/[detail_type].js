import nc from "next-connect";
import { getDetailById } from "../../../controller";

const handler = nc();
handler.get(getDetailById);
export default handler;
