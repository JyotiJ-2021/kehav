import nc from "next-connect";
import { SaveContactDetail } from "../../controller";

const handler = nc();
handler.post(SaveContactDetail);
export default handler;
